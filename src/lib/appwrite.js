import { Client, account } from 'appwrite';

const appWriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const  appWriteProjectEndpoint = import.meta.env.VITE_APPWRITE_PROJECT_ENDPOINT;

const client = new Client();

client.setProject(appWriteProjectId)
 .setEndpoint(appWriteProjectEndpoint)

const account = new account(client);