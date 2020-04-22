npm install grpc google-protobuf dotenv
npm install typescript @types/node @types/google-protobuf @types/dotenv --save

npm install grpc-tools grpc_tools_node_protoc_ts --save

# generate javascript from proto
protoc \
      --js_out=import_style=commonjs,binary:./src/protos \
      --grpc_out=./src/protos \
      --plugin=protoc-gen-grpc="./node_modules/.bin/grpc_tools_node_protoc_plugin" \
      -I ./src/protos \
      ./src/protos/fancave-teams.proto

# generate typescript from proto
protoc --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --ts_out=./src/protos \
    -I ./src/protos \
    src/protos/fancave-teams.proto

References:

https://adnanahmed.info/blog/2019/11/01/grpc-with-nodejs-typescript/