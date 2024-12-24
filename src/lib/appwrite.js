import { Client, Account } from 'appwrite';

const appWriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const appWriteProjectEndpoint = import.meta.env.VITE_APPWRITE_API_ENDPOINT;

const client = new Client();

client.setProject(appWriteProjectId)
  .setEndpoint(appWriteProjectEndpoint)

const account = new Account(client);

export  { account }