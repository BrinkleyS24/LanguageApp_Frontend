import React, { useState, useEffect } from 'react';
import { translateText, getLanguages } from '../services/api';
import './Component.css';

const TranslateText = ({ className }) => {
    const [inputText, setInputText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('');
    const [languages, setLanguages] = useState([]);
    const [translationResult, setTranslationResult] = useState(null);

    useEffect(() => {
        // Fetch supported languages when the component mounts
        fetchLanguages();
    }, []);

    const fetchLanguages = async () => {
        try {
            const result = await getLanguages();
            setLanguages(result); // Set the languages array directly
        } catch (error) {
            console.error('Error fetching languages:', error);
        }
    };



    const handleTranslateText = async () => {
        try {
            // Call the translation API with input text, source language, and target language
            const result = await translateText(inputText, sourceLanguage, targetLanguage);
            setTranslationResult(result);
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <div>
            <h2>Translate Text</h2>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Text to translate"
            />
            <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
            <option value="">Select Source language</option>
                {languages.map((language) => (
                    <option key={language.language} value={language.language}>
                        {language.name}
                    </option>
                ))}
            </select>

            <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                <option value="">Select Target language</option>
                {languages.map((language) => (
                    <option key={language.language} value={language.language}>
                        {language.name}
                    </option>
                ))}
            </select>

            <button onClick={handleTranslateText}>Translate</button>
            {translationResult && (
                <div>
                    <h3>Translation Result:</h3>
                    <pre>{translationResult}</pre>
                </div>
            )}
        </div>
    );
};

export default TranslateText;
