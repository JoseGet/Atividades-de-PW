import { Request, Response } from 'express';
import { LoremIpsum } from "lorem-ipsum";

const index = (req: Request, res: Response) => {
res.end('Welcome to Web academy!');
};

const hb1 = (req: Request,res: Response) => {
    res.render("main/hb1", { 
      uf: 'Universidade Federal do Amazonas' 
});
};

const hb2 = (req: Request, res: Response) => {
    res.render('main/hb2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework'
    });
};

const hb3 = (req: Request, res: Response) => {
    const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('main/hb3', { profes });
};

const hb4 = (req: Request, res: Response) => {
    const technologies = [
      { name: 'Express', type: 'Framework', poweredByNodejs: true },
      { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
      { name: 'React', type: 'Library', poweredByNodejs: true },
      { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
      { name: 'Django', type: 'Framework', poweredByNodejs: false },
      { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
      { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
      ];
    res.render('main/hb4', { technologies });
};

const default_lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
});

const lorem = (req: Request, res: Response) => {
    const numParagraphs = parseInt(req.params.num, 10);
    const paragraphs = default_lorem.generateParagraphs(numParagraphs);
    res.send(paragraphs);
};

const sobre = (req: Request, res: Response) => {
    res.send('Página sobre');
};

const createCookie = function (req: Request, res: Response) {
  if (!('nomeCookie' in req.cookies)) {
  res.cookie('nomeCookie', 'valorCookie');
  res.send('Você NUNCA passou por aqui!');
  } else {
  res.send('Você JÁ passou por aqui');
  }
};

export default { index, hb1, hb2, hb3, hb4, lorem, sobre, createCookie};