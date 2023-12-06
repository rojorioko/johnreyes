module.exports = {
    paths: function (paths, env) {
        paths.appBuild = paths.appBuild.replace("build", "dist");
        return paths;
    },
    webpack: function (config, env) {
        if (env === "production") {
            config.optimization.runtimeChunk = false;
            config.optimization.splitChunks = {
                cacheGroups: {
                    default: false
                }
            };

            config.output.filename = "js/devdemo.js";
            config.output.chunkFilename = "js/devdemo.chunk.js";

            config.plugins[5].options.filename = "css/devdemo.css";
            config.plugins[5].options.moduleFilename = () => "css/devdemo.css";
        }

        return config;
    }
};