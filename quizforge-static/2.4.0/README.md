# QuizForge 2.4.0

Static, offline-first e realmente multidisciplinare per fasce 10, 13, 16 e 20 anni.

- 10 categorie in ogni fascia: Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione civica, Tecnologia, Arte e musica, Logica e cultura generale.
- Quiz da 10: una domanda esatta per categoria.
- Quiz da 20: due domande esatte per categoria.
- Matematica sempre al 10%.
- Cinque livelli interni, calibrati entro la fascia scelta.
- Eliminati contenuti specialistici come subnet, sharding, bitwise, logaritmi e combinatoria avanzata.
- Nessun backend, account o tracciamento.
- Audit locale: 30.000 quiz-case su tutte le fasce e dimensioni, con verifica di determinismo, unicità interna, copertura e quota disciplinare.

## Ricostruzione del sorgente

```bash
cat source.tar.gz.b64.part-* | base64 -d > quizforge-2.4.0-source.tar.gz
tar -xzf quizforge-2.4.0-source.tar.gz
```
