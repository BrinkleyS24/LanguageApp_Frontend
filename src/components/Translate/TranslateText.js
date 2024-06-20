import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './TranslateText.css';

const TranslateText = () => {
  const [languages, setLanguages] = useState([]);
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [inputText, setInputText] = useState('');
  const [translationResult, setTranslationResult] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/LanguageConversion/languages');
        setLanguages(response.data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };
    fetchLanguages();
  }, []);

  const handleTranslateText = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/LanguageConversion/translate', {
        sourceLanguage,
        targetLanguage,
        inputText
      });
      setTranslationResult(response.data.translatedText);
    } catch (error) {
      setError('Error translating text');
      console.error('Error translating text:', error);
    }
  };

  return (
    <Container className="translate-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Text Translation</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="sourceLanguage">
              <Form.Label>Source Language</Form.Label>
              <Form.Control as="select" value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                <option value="">Select source language</option>
                {languages.map((language) => (
                  <option key={language.language} value={language.language}>
                    {language.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="targetLanguage">
              <Form.Label>Target Language</Form.Label>
              <Form.Control as="select" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                <option value="">Select target language</option>
                {languages.map((language) => (
                  <option key={language.language} value={language.language}>
                    {language.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="text">
              <Form.Label>Text to Translate</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to translate"
              />
            </Form.Group>

            <Button className="translate-button" onClick={handleTranslateText}>
              Translate
            </Button>
          </Form>

          {translationResult && (
            <div className="translation-result">
              <h3>Translation Result:</h3>
              <p>{translationResult}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TranslateText;
