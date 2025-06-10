package io.conduktor.demos.kafka.opensearch;

import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.DefaultConnectionKeepAliveStrategy;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.joda.time.field.AbstractReadableInstantFieldProperty;
import org.opensearch.action.index.IndexRequest;
import org.opensearch.action.index.IndexResponse;
import org.opensearch.client.RequestOptions;
import org.opensearch.client.RestClient;
import org.opensearch.client.RestHighLevelClient;
import org.opensearch.client.indices.CreateIndexRequest;
import org.opensearch.client.indices.GetIndexRequest;
import org.opensearch.common.xcontent.XContentType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.time.Duration;
import java.util.Arrays;
import java.util.Collections;
import java.util.Properties;

public class OpenSearchConsumer {
    public static RestHighLevelClient createOpenSearchClient() {
        String connString = "http://localhost:9200";
        // String connString = "https://c9p5mwld41:45zeygn9hy@kafka-course-2322630105.eu-west-1.bonsaisearch.net:443";

        // we build a URI from the connection string
        RestHighLevelClient restHighLevelClient;
        URI connUri = URI.create(connString);
        // extract login information if it exists
        String userInfo = connUri.getUserInfo();

        if (userInfo == null) {
        // REST client without security
        restHighLevelClient = new RestHighLevelClient(RestClient.builder(new HttpHost(connUri.getHost(), connUri.getPort(), "http")));

        } else {
        // REST client with security
        String[] auth = userInfo.split(":");

        CredentialsProvider cp = new BasicCredentialsProvider();
        cp.setCredentials(AuthScope.ANY, new UsernamePasswordCredentials(auth[0], auth[1]));

        restHighLevelClient = new RestHighLevelClient(
        RestClient.builder(new HttpHost(connUri.getHost(), connUri.getPort(), connUri.getScheme()))
        .setHttpClientConfigCallback(
                httpAsyncClientBuilder -> httpAsyncClientBuilder.setDefaultCredentialsProvider(cp)
                        .setKeepAliveStrategy(new DefaultConnectionKeepAliveStrategy())));
        }

        return restHighLevelClient;
    }

    public static void main(String[] args) throws IOException {
        Logger logger = LoggerFactory.getLogger(OpenSearchConsumer.class.getSimpleName());

        RestHighLevelClient openSearchClient = createOpenSearchClient();

        KafkaConsumer<String, String> consumer = createKafkaConsumer();

        try(openSearchClient; consumer) {
            boolean isIndexExists = openSearchClient.indices().exists(new GetIndexRequest("wikimedia"), RequestOptions.DEFAULT);
            if (!isIndexExists) {
                CreateIndexRequest createIndexRequest = new CreateIndexRequest("wikimedia");
                openSearchClient.indices().create(createIndexRequest, RequestOptions.DEFAULT);
                logger.info("wikimedia index has been created!!");
            } else {
                logger.info("wikimedia index already exists!!");
            }
            consumer.subscribe(Collections.singleton("wikimedia.recentchange"));

            while (true) {
                logger.info("Polling...");
                ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(2000));
                int recordCount = records.count();
                logger.info("Received record count: " + recordCount);
                for(ConsumerRecord<String, String> record : records) {
                    logger.info("Key: " + record.key() + ", Value: " + record.value());
                    logger.info("Partition: " + record.partition() + ", Offset: " + record.offset());

                    // for idempotent consumer
                    String id = record.topic() + "_" + record.partition() + "_" + record.offset()

                    IndexRequest indexRequest = new IndexRequest("wikimedia")
                            .source(record.value(), XContentType.JSON)
                            .id(id);
                    IndexResponse response = openSearchClient.index(indexRequest, RequestOptions.DEFAULT);

                    logger.info("Inserting 1 document into OpenSearch, response: " + response.getId());
                }

            }
        }
    }

    private static KafkaConsumer<String, String> createKafkaConsumer() {
        String bootstrapServer = "192.168.1.25:9092";
        String groupId = "consumer-opensearch-demo";

        Properties properties = new Properties();
        properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
        properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

        return new KafkaConsumer<>(properties);
    }
}
