import * as $protobuf from "protobufjs";
/** Namespace tutorial. */
export namespace tutorial {

    /** Properties of a Player. */
    interface IPlayer {

        /** Player Name */
        Name?: (string|null);

        /** Player Country */
        Country?: (string|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: tutorial.IPlayer);

        /** Player Name. */
        public Name: string;

        /** Player Country. */
        public Country: string;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: tutorial.IPlayer): tutorial.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link tutorial.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tutorial.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link tutorial.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tutorial.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): tutorial.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tutorial.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CricketBook. */
    interface ICricketBook {

        /** CricketBook Tournament */
        Tournament?: (string|null);

        /** CricketBook Player */
        Player?: (tutorial.IPlayer[]|null);

        /** CricketBook fileCsv */
        fileCsv?: (Uint8Array|null);
    }

    /** Represents a CricketBook. */
    class CricketBook implements ICricketBook {

        /**
         * Constructs a new CricketBook.
         * @param [properties] Properties to set
         */
        constructor(properties?: tutorial.ICricketBook);

        /** CricketBook Tournament. */
        public Tournament: string;

        /** CricketBook Player. */
        public Player: tutorial.IPlayer[];

        /** CricketBook fileCsv. */
        public fileCsv: Uint8Array;

        /**
         * Creates a new CricketBook instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CricketBook instance
         */
        public static create(properties?: tutorial.ICricketBook): tutorial.CricketBook;

        /**
         * Encodes the specified CricketBook message. Does not implicitly {@link tutorial.CricketBook.verify|verify} messages.
         * @param message CricketBook message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tutorial.ICricketBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CricketBook message, length delimited. Does not implicitly {@link tutorial.CricketBook.verify|verify} messages.
         * @param message CricketBook message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tutorial.ICricketBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CricketBook message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CricketBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tutorial.CricketBook;

        /**
         * Decodes a CricketBook message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CricketBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tutorial.CricketBook;

        /**
         * Verifies a CricketBook message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CricketBook message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CricketBook
         */
        public static fromObject(object: { [k: string]: any }): tutorial.CricketBook;

        /**
         * Creates a plain object from a CricketBook message. Also converts values to other types if specified.
         * @param message CricketBook
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tutorial.CricketBook, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CricketBook to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
