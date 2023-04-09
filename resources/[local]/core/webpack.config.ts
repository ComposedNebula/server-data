import path from "path";
import { Configuration } from "webpack";

const client: Configuration = {
    entry: "../core/src/client/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist/client"),
        filename: "client.[chunkhash].js",
        clean: true,
    },
};

const server = {
    entry: "../core/src/server/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist/server"),
        filename: "server.[chunkhash].js",
        clean: true,
    },
    watch: true,
};

module.exports = [client, server];
