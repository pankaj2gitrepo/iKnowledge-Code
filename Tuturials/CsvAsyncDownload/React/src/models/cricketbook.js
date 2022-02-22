/* eslint-disable */
/*eslint-disable*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const tutorial = $root.tutorial = (() => {

    /**
     * Namespace tutorial.
     * @exports tutorial
     * @namespace
     */
    const tutorial = {};

    tutorial.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof tutorial
         * @interface IPlayer
         * @property {string|null} [Name] Player Name
         * @property {string|null} [Country] Player Country
         */

        /**
         * Constructs a new Player.
         * @memberof tutorial
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {tutorial.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player Name.
         * @member {string} Name
         * @memberof tutorial.Player
         * @instance
         */
        Player.prototype.Name = "";

        /**
         * Player Country.
         * @member {string} Country
         * @memberof tutorial.Player
         * @instance
         */
        Player.prototype.Country = "";

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof tutorial.Player
         * @static
         * @param {tutorial.IPlayer=} [properties] Properties to set
         * @returns {tutorial.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link tutorial.Player.verify|verify} messages.
         * @function encode
         * @memberof tutorial.Player
         * @static
         * @param {tutorial.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Country != null && Object.hasOwnProperty.call(message, "Country"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Country);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link tutorial.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tutorial.Player
         * @static
         * @param {tutorial.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof tutorial.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tutorial.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tutorial.Player();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Country = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tutorial.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tutorial.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof tutorial.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Country != null && message.hasOwnProperty("Country"))
                if (!$util.isString(message.Country))
                    return "Country: string expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tutorial.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tutorial.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.tutorial.Player)
                return object;
            let message = new $root.tutorial.Player();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Country != null)
                message.Country = String(object.Country);
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tutorial.Player
         * @static
         * @param {tutorial.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Name = "";
                object.Country = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Country != null && message.hasOwnProperty("Country"))
                object.Country = message.Country;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof tutorial.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    tutorial.CricketBook = (function() {

        /**
         * Properties of a CricketBook.
         * @memberof tutorial
         * @interface ICricketBook
         * @property {string|null} [Tournament] CricketBook Tournament
         * @property {Array.<tutorial.IPlayer>|null} [Player] CricketBook Player
         * @property {Uint8Array|null} [fileCsv] CricketBook fileCsv
         */

        /**
         * Constructs a new CricketBook.
         * @memberof tutorial
         * @classdesc Represents a CricketBook.
         * @implements ICricketBook
         * @constructor
         * @param {tutorial.ICricketBook=} [properties] Properties to set
         */
        function CricketBook(properties) {
            this.Player = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CricketBook Tournament.
         * @member {string} Tournament
         * @memberof tutorial.CricketBook
         * @instance
         */
        CricketBook.prototype.Tournament = "";

        /**
         * CricketBook Player.
         * @member {Array.<tutorial.IPlayer>} Player
         * @memberof tutorial.CricketBook
         * @instance
         */
        CricketBook.prototype.Player = $util.emptyArray;

        /**
         * CricketBook fileCsv.
         * @member {Uint8Array} fileCsv
         * @memberof tutorial.CricketBook
         * @instance
         */
        CricketBook.prototype.fileCsv = $util.newBuffer([]);

        /**
         * Creates a new CricketBook instance using the specified properties.
         * @function create
         * @memberof tutorial.CricketBook
         * @static
         * @param {tutorial.ICricketBook=} [properties] Properties to set
         * @returns {tutorial.CricketBook} CricketBook instance
         */
        CricketBook.create = function create(properties) {
            return new CricketBook(properties);
        };

        /**
         * Encodes the specified CricketBook message. Does not implicitly {@link tutorial.CricketBook.verify|verify} messages.
         * @function encode
         * @memberof tutorial.CricketBook
         * @static
         * @param {tutorial.ICricketBook} message CricketBook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CricketBook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Tournament != null && Object.hasOwnProperty.call(message, "Tournament"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tournament);
            if (message.Player != null && message.Player.length)
                for (let i = 0; i < message.Player.length; ++i)
                    $root.tutorial.Player.encode(message.Player[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.fileCsv != null && Object.hasOwnProperty.call(message, "fileCsv"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.fileCsv);
            return writer;
        };

        /**
         * Encodes the specified CricketBook message, length delimited. Does not implicitly {@link tutorial.CricketBook.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tutorial.CricketBook
         * @static
         * @param {tutorial.ICricketBook} message CricketBook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CricketBook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CricketBook message from the specified reader or buffer.
         * @function decode
         * @memberof tutorial.CricketBook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tutorial.CricketBook} CricketBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CricketBook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tutorial.CricketBook();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Tournament = reader.string();
                    break;
                case 2:
                    if (!(message.Player && message.Player.length))
                        message.Player = [];
                    message.Player.push($root.tutorial.Player.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.fileCsv = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CricketBook message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tutorial.CricketBook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tutorial.CricketBook} CricketBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CricketBook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CricketBook message.
         * @function verify
         * @memberof tutorial.CricketBook
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CricketBook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Tournament != null && message.hasOwnProperty("Tournament"))
                if (!$util.isString(message.Tournament))
                    return "Tournament: string expected";
            if (message.Player != null && message.hasOwnProperty("Player")) {
                if (!Array.isArray(message.Player))
                    return "Player: array expected";
                for (let i = 0; i < message.Player.length; ++i) {
                    let error = $root.tutorial.Player.verify(message.Player[i]);
                    if (error)
                        return "Player." + error;
                }
            }
            if (message.fileCsv != null && message.hasOwnProperty("fileCsv"))
                if (!(message.fileCsv && typeof message.fileCsv.length === "number" || $util.isString(message.fileCsv)))
                    return "fileCsv: buffer expected";
            return null;
        };

        /**
         * Creates a CricketBook message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tutorial.CricketBook
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tutorial.CricketBook} CricketBook
         */
        CricketBook.fromObject = function fromObject(object) {
            if (object instanceof $root.tutorial.CricketBook)
                return object;
            let message = new $root.tutorial.CricketBook();
            if (object.Tournament != null)
                message.Tournament = String(object.Tournament);
            if (object.Player) {
                if (!Array.isArray(object.Player))
                    throw TypeError(".tutorial.CricketBook.Player: array expected");
                message.Player = [];
                for (let i = 0; i < object.Player.length; ++i) {
                    if (typeof object.Player[i] !== "object")
                        throw TypeError(".tutorial.CricketBook.Player: object expected");
                    message.Player[i] = $root.tutorial.Player.fromObject(object.Player[i]);
                }
            }
            if (object.fileCsv != null)
                if (typeof object.fileCsv === "string")
                    $util.base64.decode(object.fileCsv, message.fileCsv = $util.newBuffer($util.base64.length(object.fileCsv)), 0);
                else if (object.fileCsv.length)
                    message.fileCsv = object.fileCsv;
            return message;
        };

        /**
         * Creates a plain object from a CricketBook message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tutorial.CricketBook
         * @static
         * @param {tutorial.CricketBook} message CricketBook
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CricketBook.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.Player = [];
            if (options.defaults) {
                object.Tournament = "";
                if (options.bytes === String)
                    object.fileCsv = "";
                else {
                    object.fileCsv = [];
                    if (options.bytes !== Array)
                        object.fileCsv = $util.newBuffer(object.fileCsv);
                }
            }
            if (message.Tournament != null && message.hasOwnProperty("Tournament"))
                object.Tournament = message.Tournament;
            if (message.Player && message.Player.length) {
                object.Player = [];
                for (let j = 0; j < message.Player.length; ++j)
                    object.Player[j] = $root.tutorial.Player.toObject(message.Player[j], options);
            }
            if (message.fileCsv != null && message.hasOwnProperty("fileCsv"))
                object.fileCsv = options.bytes === String ? $util.base64.encode(message.fileCsv, 0, message.fileCsv.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileCsv) : message.fileCsv;
            return object;
        };

        /**
         * Converts this CricketBook to JSON.
         * @function toJSON
         * @memberof tutorial.CricketBook
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CricketBook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CricketBook;
    })();

    return tutorial;
})();

export { $root as default };
