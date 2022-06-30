package io.conduktor.demos.kafka;


import org.apache.kafka.clients.producer.*;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

// ToDo:
//  Before running the code, Start Zookeeper and Kafka
//  Set BOOTSTRAP_SERVERS_CONFIG with local IP address
public class ProducerDemoWithCallback {

    private static final Logger logger = LoggerFactory.getLogger(ProducerDemoWithCallback.class.getSimpleName());

    public static void main(String[] args) {
        logger.info("Starting Producer With Callback..");

        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "192.168.1.25:9092");
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        KafkaProducer<String, String> producer = new KafkaProducer<>(properties);

        ProducerRecord<String , String> producerRecord = new ProducerRecord<>("demo_java", "hello world!!");

        producer.send(producerRecord, new Callback() {
            @Override
            public void onCompletion(RecordMetadata metadata, Exception exception) {
                if (exception == null) {
                    logger.info("\nReceived new metadata" + "\n" +
                                    " Topic: " + metadata.topic() + "\n" +
                                    " Partition: " + metadata.partition() + "\n" +
                                    " Offset: " + metadata.offset() + "\n" +
                                    " Timestamp: " + metadata.timestamp() +"\n"
                            );

                } else {
                    logger.error("Error while producing", exception);
                }
            }
        });

        producer.flush();

        producer.close();
    }
}
