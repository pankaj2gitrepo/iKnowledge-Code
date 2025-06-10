PROTO_DIR=$1
echo "\nPROTO_DIR ${PROTO_DIR}"

PROTO_FILE_NAME=$2

OUT_DIR="./src/models/"
PROTO_MAIN_DIR="./protos/proto"
JS_FILE_NAME_TMP="${JS_FILE_NAME}.tmp"
JS_FILE_NAME="${OUT_DIR}${PROTO_FILE_NAME}.js"
TS_FILE_NAME="${OUT_DIR}${PROTO_FILE_NAME}.d.ts"
PROTO_FILE="${PROTO_MAIN_DIR}/${PROTO_DIR}/${PROTO_FILE_NAME}.proto"

echo "\nGenerating JS and TS protobuf models for ${PROTO_FILE}"

# generate JS
./node_modules/.bin/pbjs -l eslint-disable -t static-module -w es6 -o ${JS_FILE_NAME} ${PROTO_FILE} -p ${PROTO_DIR}

# add lint disablig directive to generated JS
(echo "/* eslint-disable */" && cat ${JS_FILE_NAME}) > ${JS_FILE_NAME_TMP}

mv ${JS_FILE_NAME_TMP} ${JS_FILE_NAME}

# generate TS
./node_modules/.bin/pbts -o ${TS_FILE_NAME} ${JS_FILE_NAME}