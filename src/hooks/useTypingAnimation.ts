import { useEffect, useState } from 'react';

export function useTypingAnimation(
  words: string[],
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
}

