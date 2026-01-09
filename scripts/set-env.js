const fs = require('fs');
const path = require('path');

// Configure the path to the .env file
const envPath = path.resolve(__dirname, '../.env');
const targetPath = path.resolve(__dirname, '../src/environments/environment.ts');

// Function to read .env file
function readEnv(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`.env file not found at ${filePath}`);
        process.exit(1);
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const env = {};
    content.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            env[key.trim()] = value.trim();
        }
    });
    return env;
}

const env = readEnv(envPath);

const envFileContent = `export const environment = {
    firebase: {
        projectId: "${env.FIREBASE_PROJECT_ID}",
        appId: "${env.FIREBASE_APP_ID}",
        storageBucket: "${env.FIREBASE_STORAGE_BUCKET}",
        apiKey: "${env.FIREBASE_API_KEY}",
        authDomain: "${env.FIREBASE_AUTH_DOMAIN}",
        messagingSenderId: "${env.FIREBASE_MESSAGING_SENDER_ID}",
        measurementId: "${env.FIREBASE_MEASUREMENT_ID}"
    }
};
`;

fs.writeFile(targetPath, envFileContent, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Output generated at ${targetPath}`);
});
