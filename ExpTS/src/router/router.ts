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

router.get("/hb1", (req,res) => {
  res.render("hb1", { 
    mensagem: 'Ola, voce esta aprenddendo Express + HBS!',
    layout: false 
  })
});

router.get('/hb3', (req, res) => {
  const profes = [
  { nome: 'David Fernandes', sala: 1238 },
  { nome: 'Horácio Fernandes', sala: 1233 },
  { nome: 'Edleno Moura', sala: 1236 },
  { nome: 'Elaine Harada', sala: 1231 }
  ];
  res.render('hb3', { profes, layout: false });
});

router.get('/hb2', (req, res) => {
  res.render('hb2', {
  poweredByNodejs: true,
  name: 'Express',
  type: 'Framework',
  layout: false,
  });
});

router.get('/hb4', function (req, res) {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
  res.render('hb4', { technologies, layout: false });
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