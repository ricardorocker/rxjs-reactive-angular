# RxjsReactiveAngular

06 – Diferenças (observable | subject | behavior)
- Observable:
  - Não guarda o último valor emitido
  - Não envia o último valor emitido para novos assinantes
  - Não pode ser usado para enviar mensagens para vários assinantes

- Subject:
  - Não guarda o último valor emitido
  - Envia o último valor emitido para novos assinantes
  - Pode ser usado para enviar mensagens para vários assinantes

- BehaviorSubject:
  - Armazena o último valor emitido
  - Envia o último valor emitido para novos assinantes
  - Pode ser usado para enviar mensagens para vários assinantes
  
EXEMPLOS:
- Observable: 
  - Manipular chamadas assíncronas à API REST 
  - Atualizar o estado de uma aplicação em tempo real 
  - Monitorar o estado de um dispositivo 

- Subject: 
  - Chat em tempo real 
  - Gerenciamento de eventos 
  - Notificações push

