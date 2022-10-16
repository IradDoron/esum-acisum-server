import dotenv from "dotenv";
import path from "path";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  PORT: number | undefined;
  HOST: string | undefined;
}
// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    PORT: process.env['PORT'] ? Number(process.env['PORT']) : undefined,
    HOST: process.env['HOST'] ? process.env['HOST'] : undefined,
  };
}; 

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
   
    const { PORT } = config;
    console.log(PORT);
    if (PORT === undefined) {
        throw new Error("PORT is undefined");
    }
  
  return config as Config;
};

const config = getConfig();

export const sanitizedConfig = getSanitzedConfig(config);

export type Config = Required<ENV>