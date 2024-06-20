import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

export const detectLanguage = async (inputText) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/LanguageConversion/detect`, { inputText });
        return response.data;
    } catch (error) {
        console.error('Error detecting language:', error);
        throw error;
    }
};

export const getLanguages = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/LanguageConversion/languages`);
        return response.data;
    } catch (error) {
        console.error('Error getting languages:', error);
        throw error;
    }
};

export const translateText = async (inputText, sourceLanguage, targetLanguage) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/LanguageConversion/translate`, { inputText, sourceLanguage, targetLanguage });
        return response.data.translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
};
