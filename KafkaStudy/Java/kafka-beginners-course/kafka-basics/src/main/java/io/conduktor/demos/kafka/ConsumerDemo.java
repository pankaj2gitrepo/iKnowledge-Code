package io.conduktor.demos.kafka;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.errors.WakeupException;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.util.Arrays;
import java.util.Properties;

public class ConsumerDemo {
    private static final Logger logger = LoggerFactory.getLogger(ProducerDemo.class.getSimpleName());

    public static void main(String[] args) {
        String bootstrapServer = "192.168.1.25:9092";
        String topic = "demo_java";
        String groupId = "my-application";

        Properties properties = new Properties();
        properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
        properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(properties);
        // On Shutdown
        final Thread mainThread = Thread.currentThread();
        Runtime.getRuntime().addShutdownHook(new Thread() {
            @Override
            public void run() {
                logger.info("Inside shutdown thread. Raise exception on consumer.poll() by calling consumer.wakeup()");
                logger.info("Rejoin the main thread to let exception occur at consumer.poll() to exit from infinite while loop");
                consumer.wakeup();
                try {
                    mainThread.join();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        });

        consumer.subscribe(Arrays.asList(topic));

        try {
            while (true) {
                logger.info("Polling...");
                ConsumerRecords<String, String> records =
                        consumer.poll(Duration.ofMillis(100));
                for(ConsumerRecord<String, String> record : records) {
                    logger.info("Key: " + record.key() + ", Value: " + record.value());
                    logger.info("Partition: " + record.partition() + ", Offset: " + record.offset());
                }
            }
        }
        catch (WakeupException we) {
            logger.info("Wakeup exception to exit from infinite while loop");
        }
        catch (Exception e) {
            logger.info("Unexpected exception: ", e.toString());
        }
        finally {
            consumer.close();
            logger.info("Consumer is gracefully closed.");
        }
    }
}
