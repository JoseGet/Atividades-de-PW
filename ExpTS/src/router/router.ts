import { Router } from 'express';
import { LoremIpsum } from "lorem-ipsum";

const router = Router();

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  router.get('/lorem/:num', (req, res) => {
    const numParagraphs = parseInt(req.params.num, 10);
    const paragraphs = lorem.generateParagraphs(numParagraphs);
    res.send(paragraphs);
  });

router.get('/', (req, res) => {
    res.send('Página principal do site');
});

router.get('/sobre', (req, res) => {
    res.send('Página sobre');
});

router.get("/google", (req, res) => {
    res.redirect("http://google.com");
})

export default router;