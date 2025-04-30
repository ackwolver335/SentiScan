import React, { useEffect, useState } from 'react';

const words = ["Postive","Negative","Neutral"];

export default function TypingText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const speed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 250);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className="typing">
      {displayedText}
      <div className="cursor">|</div>
    </div>
  );
}