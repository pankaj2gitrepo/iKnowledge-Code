package io.conduktor.demos.kafka;


import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

// ToDo:
//  Before running the code, Start Zookeeper and Kafka
//  Set BOOTSTRAP_SERVERS_CONFIG with local IP address
public class ProducerDemo {
    private static final Logger logger = LoggerFactory.getLogger(ProducerDemo.class.getSimpleName());

    public static void main(String[] args) {
        logger.info("Starting Producer..");
        String bootstrapServer = "192.168.1.25:9092";
        String topic = "demo_java";

        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        KafkaProducer<String, String> producer = new KafkaProducer<>(properties);

        ProducerRecord<String , String> producerRecord = new ProducerRecord<>(topic, "hello world!!");

        producer.send(producerRecord);

        producer.flush();

        producer.close();
    }
}
