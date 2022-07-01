package io.conduktor.demos.kafka;


import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

// ToDo:
//  Before running the code, Start Zookeeper and Kafka
//  Set BOOTSTRAP_SERVERS_CONFIG with local IP address
public class ProducerDemoWithKey {

    private static final Logger logger = LoggerFactory.getLogger(ProducerDemoWithKey.class.getSimpleName());

    public static void main(String[] args) throws InterruptedException {
        logger.info("Starting Producer With Callback..");
        String bootstrapServer = "192.168.1.25:9092";
        String topic = "demo_java";

        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        KafkaProducer<String, String> producer = new KafkaProducer<>(properties);

        for (int i=0; i< 10000; i++) {
            // Message with Same key always goes to same partition
            String key = "id___" +i;
            String value = "hello world!! Message# " + i;
            ProducerRecord<String, String> producerRecord = new ProducerRecord<>(topic, key, value);

            producer.send(producerRecord, new Callback() {
                @Override
                public void onCompletion(RecordMetadata metadata, Exception exception) {
                    if (exception == null) {
                        logger.info("\nReceived new metadata => " +
                                " Topic: " + metadata.topic() +
                                " Key: " + producerRecord.key() +
                                " Partition: " + metadata.partition() +
                                " Offset: " + metadata.offset() +
                                " Timestamp: " + metadata.timestamp()
                        );

                    } else {
                        logger.error("Error while producing", exception);
                    }
                }
            });
            producer.flush();
            Thread.sleep(2000);
        }
        producer.close();
    }
}
