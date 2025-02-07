import * as fs from 'fs'
export const removeDirectory = async (dirPath: string) => {
    try {
        await fs.promises.rm(dirPath, { recursive: true, force: true });
        console.log(`Directory ${dirPath} deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting directory ${dirPath}:`, error);
    }
};