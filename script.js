// DICIONÁRIO DE TRADUÇÕES ATUALIZADO
const translations = {
    'en': {
        appTitle: 'Giveaway Tool',
        loginSubtitle: 'Enter the channel(s) for the giveaway. You can connect to one or both.',
        kickChannel: 'Kick Channel',
        twitchChannel: 'Twitch Channel',
        connect: 'Connect',
        connectedTo: 'Connected to:',
        language: 'Language',
        changeChannel: 'Change Channel',
        settings: 'Settings',
        keyword: 'Keyword (optional):',
        allowDualEntry: 'Allow dual entry (Kick + Twitch)',
        excludeMods: 'Exclude Moderators',
        showWinnerChat: "Show winner's chat on modal",
        timerDuration: 'Winner Timer Duration (seconds):',
        animation: 'Giveaway Animation:',
        animScramble: 'Character Scramble',
        animNone: 'No Animation',
        multipliers: 'Luck Multipliers',
        platform: 'Platform',
        botSettings: 'Bot Settings',
        
        enableTwitchBot: 'Enable Twitch Bot',
        botUsername: 'Twitch Bot Username',
        botUsernamePlaceholder: "Your bot's username",
        botToken: 'Twitch Bot OAuth Token',
        startMessage: 'Start Giveaway Message ({keyword})',
        announceMessage: 'Winner Announcement Message ({winner}, {platform}, {chance}%)',
        defaultStartMessage: 'A new giveaway has started! Type {keyword} to enter!',
        defaultAnnounceMessage: 'Congratulations @{winner}, you won the giveaway from {platform} with a {chance}% chance! 🎉',
        
        enableKickBot: 'Enable Kick Bot (via Kicklet)',
        kickletApiToken: 'Kicklet API Token',
        kickStartMessage: 'Kick Start Message ({keyword})',
        kickAnnounceMessage: 'Kick Winner Message ({winner}, {platform}, {chance}%)',
        defaultKickStartMessage: 'A new giveaway has started! Type {keyword} to enter!',
        defaultKickAnnounceMessage: 'Congratulations @{winner}, you won the giveaway from {platform} with a {chance}% chance! 🎉',
        
        kickletTokenTooltip: 'Get this from YOUR Kicklet Profile Settings <a href=\"https://kicklet.app/profile/settings\" target=\"_blank\">https://kicklet.app/profile/settings</a> log in to your account, go to "API tokens" and click to create a bot, choose any name you want, copy and paste the token here<br><br>This allows the tool to send messages as the Kicklet bot in your chat.',
        kickStartMessageTooltip: 'Message the Kicklet bot will send when you click "Start Giveaway".<br><br><code>{keyword}</code> is replaced by your keyword.',
        kickAnnounceMessageTooltip: 'Message the Kicklet bot will send when a winner is drawn.<br><br><code>{winner}</code> is replaced by the winner\'s name.<br><code>{platform}</code> is replaced by "Kick" or "Twitch".<br><code>{chance}</code> is replaced by the winner\'s % chance of winning (based on their entries).',

        saveSettings: 'Save All Settings',
        statusWaiting: 'Press "Start Giveaway" to connect to chat(s).',
        statusConnected: 'Connected! Waiting for entries.',
        statusError: 'Connection error.',
        kickError: 'Kick connection error.',
        kickLost: 'Kick connection lost.',
        startGiveaway: 'Start Giveaway',
        participants: 'Participants',
        drawWinner: 'Draw Winner',
        reset: 'Reset',
        winners: 'Winners',
        drawing: 'Drawing...',
        ok: 'OK',
        drawAgain: 'Draw Again',
        alertNoParticipants: 'There are no participants to draw from!',
        alertKickConnectFail: 'Could not find Kick channel:',
        alertKickChatroomFail: 'Could not get Kick chatroom ID.',
        alertNoChannel: 'Please enter at least one channel name.',
        alertConnectFail: 'Connection failed:',
        alertSettingsSaved: 'Settings saved!',
        credits: 'Updated version of the kickaway (github) project by darcherman v2.0',
        allowDualEntryTooltip: 'If checked, a user can enter once on Kick AND once on Twitch, doubling their chances.<br><br>If unchecked, the first entry (from either platform) is the only one that counts.',
        botTokenTooltip: 'This is the "password" for your bot account.<br><br><strong>How to get it:</strong><br>1. Create a new Twitch account for your bot (e.g., "MyBot").<br>2. Enable 2-Factor-Auth (2FA) on it.<br>3. Go to <code>twitchtokengenerator.com</code> and get the "Access Token".<br>4. Paste the token here and add <code>oauth:</code> in front (e.g., <code>oauth:abcdef123...</code>).',
        startMessageTooltip: 'Message the bot will send when you click "Start Giveaway".<br><br><code>{keyword}</code> is replaced by your keyword. If no keyword, it will be replaced with "any message".',
        announceMessageTooltip: 'The message your bot will send to the Twitch chat when a winner is drawn.<br><br><code>{winner}</code> is replaced by the winner\'s name.<br><code>{platform}</code> is replaced by "Kick" or "Twitch".<br><code>{chance}</code> is replaced by the winner\'s % chance of winning (based on their entries).',
        
        multipliersTooltip: "Increases a user's chance of winning.<br><br><strong>Example:</strong> If the value is '2', a SUB will have 2x the chances (2 'tickets' in the draw).<br><br><strong>IMPORTANT (KICK):</strong> For the Kick Sub and VIP multiplier to work, the user must have their <strong>Sub/VIP badge enabled</strong> in their chat settings on your Kick channel.",

        chatWaitingForMessage: 'Waiting for a message from the winner...',
        keywordAnyMessage: 'any message',

        pauseGiveaway: 'Stop Entries',
        resumeGiveaway: 'Resume Entries',
        statusPaused: 'Entries are paused.',
        closedMessages: '"Entries Closed" Messages',
        closedMessagesDesc: 'Messages sent by bots when you stop entries.',
        twitchClosedMessage: 'Twitch "Closed" Message',
        kickClosedMessage: 'Kick "Closed" Message',
        closedMessageTooltip: 'Message the bot will send when you click "Stop Entries".',
        defaultTwitchClosedMessage: 'Entries are now closed! Good luck.',
        defaultKickClosedMessage: 'Entries are now closed! Good luck.',

        enableAwardsOverlay: 'Awards Panel', 
        awardsDv: 'DV (Login)',
        awardsApiKey: 'API Key',
        awardsOverlayTooltip: 'Enter the credentials for your overlay.html file.<br><br>This tool only saves the settings; the overlay file reads them separately.',
        awardsPanelTitle: 'Current Awards',
        awardsStatusLoading: 'Loading awards...',
        awardsStatusError: 'Check credentials in settings.',
        awardsStatusApiError: 'API Error. Retrying...',
        awardsStatusNoAwards: 'No awards available.',
        awardAnnounceMessageLabel: 'Award Announcement Message ({award})',
        awardAnnounceMessageTooltip: 'The message your bots will send when you click an award.<br><br><code>{award}</code> is replaced by the award name.',
        defaultAwardAnnounceMessage: 'Next giveaway: {award}!'
    },
    'pt': {
        appTitle: 'Ferramenta de Sorteio',
        loginSubtitle: 'Digite o(s) canal(is) para o sorteio. Você pode conectar um ou ambos.',
        kickChannel: 'Canal da Kick',
        twitchChannel: 'Canal da Twitch',
        connect: 'Conectar',
        connectedTo: 'Conectado a:',
        language: 'Idioma',
        changeChannel: 'Trocar Canal',
        settings: 'Configurações',
        keyword: 'Palavra-chave (opcional):',
        allowDualEntry: 'Permitir entrada dupla (Kick + Twitch)',
        excludeMods: 'Excluir Moderadores',
        showWinnerChat: 'Mostrar chat do vencedor no modal',
        timerDuration: 'Duração do Timer (segundos):',
        animation: 'Animação do Sorteio:',
        animScramble: 'Aleatório (letras)',
        animNone: 'Nenhuma',
        multipliers: 'Multiplicadores de Sorte',
        platform: 'Plataforma',
        botSettings: 'Configurações do Bot',

        enableTwitchBot: 'Ativar Bot da Twitch',
        botUsername: 'Nome de usuário do Bot (Twitch)',
        botUsernamePlaceholder: 'Nome do seu bot',
        botToken: 'Token OAuth do Bot (Twitch)',
        startMessage: 'Mensagem de Início do Sorteio ({keyword})',
        announceMessage: 'Mensagem de Anúncio ({winner}, {platform}, {chance}%)',
        defaultStartMessage: 'Um novo sorteio começou! Digite {keyword} para entrar!',
        defaultAnnounceMessage: 'Parabéns @{winner}, você ganhou o sorteio pela {platform} com {chance}% de chance! 🎉',
        
        enableKickBot: 'Ativar Bot da Kick (via Kicklet)',
        kickletApiToken: 'Token de API do Kicklet',
        kickStartMessage: 'Mensagem de Início (Kick) ({keyword})',
        kickAnnounceMessage: 'Mensagem de Anúncio (Kick) ({winner}, {platform}, {chance}%)',
        defaultKickStartMessage: 'Um novo sorteio começou! Digite {keyword} para entrar!',
        defaultKickAnnounceMessage: 'Parabéns @{winner}, você ganhou o sorteio pela {platform} com {chance}% de chance! 🎉',
        
        kickletTokenTooltip: 'Pegue isso nas Configurações do SEU Perfil do Kicklet <a href=\"https://kicklet.app/profile/settings\" target=\"_blank\">https://kicklet.app/profile/settings</a> entre na sua conta vá até "API tokens" e clique pra criar um bot, escolha o nome que você quiser, copie e cole aqui o token<br><br>Isso permite que a ferramenta envie mensagens como o bot Kicklet no seu chat.',
        kickStartMessageTooltip: 'Mensagem que o bot Kicklet enviará quando você clicar em "Iniciar Sorteio".<br><br><code>{keyword}</code> é substituída pela sua palavra-chave.',
        kickAnnounceMessageTooltip: 'Mensagem que o bot Kicklet enviará quando um vencedor for sorteado.<br><br><code>{winner}</code> é substituído pelo nome do vencedor.<br><code>{platform}</code> é substituído por "Kick" ou "Twitch".<br><code>{chance}</code> é substituído pela % de chance de vitória do vencedor (com base em suas entradas).',

        saveSettings: 'Salvar Configurações',
        statusWaiting: 'Pressione "Start Giveaway" para conectar ao(s) chat(s).',
        statusConnected: 'Conectado! Aguardando entradas.',
        statusError: 'Erro de conexão.',
        kickError: 'Erro na conexão com a Kick.',
        kickLost: 'Conexão com a Kick perdida.',
        startGiveaway: 'Iniciar Sorteio',
        participants: 'Participantes',
        drawWinner: 'Sortear Vencedor',
        reset: 'Resetar',
        winners: 'Vencedores',
        drawing: 'Sorteando...',
        ok: 'OK',
        drawAgain: 'Sortear Novamente',
        alertNoParticipants: 'Não há participantes para sortear!',
        alertKickConnectFail: 'Não foi possível encontrar o canal da Kick:',
        alertKickChatroomFail: 'Não foi possível obter o ID do chat da Kick.',
        alertNoChannel: 'Por favor, digite pelo menos um nome de canal.',
        alertConnectFail: 'Falha na conexão:',
        alertSettingsSaved: 'Configurações salvas!',
        credits: 'Versão atualizada do projeto kickaway (github) por darcherman v2.0',
        allowDualEntryTooltip: 'Se marcado, um usuário pode entrar uma vez na Kick E uma vez na Twitch, dobrando suas chances.<br><br>Se desmarcado, a primeira entrada (de qualquer plataforma) é a única que conta.',
        botTokenTooltip: 'Esta é a "senha" da sua conta de bot.<br><br><strong>Como obter:</strong><br>1. Crie uma nova conta no Twitch para seu bot (ex: "MeuBot").<br>2. Ative a Autenticação de 2 Fatores (2FA) nela.<br>3. Vá ao site <code>twitchtokengenerator.com</code> e pegue o "Access Token".<br>4. Cole o token aqui e adicione <code>oauth:</code> na frente (ex: <code>oauth:abcdef123...</code>).',
        startMessageTooltip: 'Mensagem que o bot enviará quando você clicar em "Iniciar Sorteio".<br><br><code>{keyword}</code> é substituída pela sua palavra-chave. Se não houver palavra-chave, será substituída por "qualquer mensagem".',
        announceMessageTooltip: 'A mensagem que seu bot enviará ao chat da Twitch quando um vencedor for sorteado.<br><br><code>{winner}</code> é substituído pelo nome do vencedor.<br><code>{platform}</code> é substituído por "Kick" ou "Twitch".<br><code>{chance}</code> é substituído pela % de chance de vitória do vencedor (com base em suas entradas).',
        
        multipliersTooltip: "Aumenta a chance de um usuário ganhar.<br><br><strong>Exemplo:</strong> Se o valor for '2', um SUB terá 2x mais chances (2 'bilhetes' no sorteio).<br><br><strong>IMPORTANTE (KICK):</strong> Para o multiplicador de Sub e VIP da Kick funcionar, o usuário precisa ter o <strong>distintivo (badge) de Sub/VIP ativado</strong> nas configurações de chat do seu canal Kick.",

        chatWaitingForMessage: 'Aguardando uma mensagem do vencedor...',
        keywordAnyMessage: 'qualquer mensagem',

        pauseGiveaway: 'Parar Entradas',
        resumeGiveaway: 'Retomar Entradas',
        statusPaused: 'As entradas estão pausadas.',
        closedMessages: 'Mensagens de "Entradas Fechadas"',
        closedMessagesDesc: 'Mensagens que os bots enviam ao parar as entradas.',
        twitchClosedMessage: 'Mensagem "Fechada" (Twitch)',
        kickClosedMessage: 'Mensagem "Fechada" (Kick)',
        closedMessageTooltip: 'Mensagem que o bot enviará quando você clicar em "Parar Entradas".',
        defaultTwitchClosedMessage: 'As entradas estão fechadas! Boa sorte.',
        defaultKickClosedMessage: 'As entradas estão fechadas! Boa sorte.',

        enableAwardsOverlay: 'Painel de Premiação',
        awardsDv: 'DV (Login)',
        awardsApiKey: 'Chave da API',
        awardsOverlayTooltip: 'Insira as credenciais para o seu painel de prêmios.<br><br>Elas são salvas localmente ao clicar em "Salvar Configurações".',
        awardsPanelTitle: 'Prêmios Atuais',
        awardsStatusLoading: 'Carregando prêmios...',
        awardsStatusError: 'Verifique as credenciais nas Configurações.',
        awardsStatusApiError: 'Erro na API. Tentando novamente...',
        awardsStatusNoAwards: 'Nenhum prêmio disponível.',
        awardAnnounceMessageLabel: 'Mensagem de Anúncio de Prêmio ({award})',
        awardAnnounceMessageTooltip: 'A mensagem que seus bots enviarão quando você clicar em um prêmio.<br><br><code>{award}</code> é substituído pelo nome do prêmio.',
        defaultAwardAnnounceMessage: 'Próximo sorteio: {award}!'
    },
    'es': {
        appTitle: 'Herramienta de Sorteo',
        loginSubtitle: 'Introduce el (los) canal(es) para el sorteio. Puedes conectar uno o ambos.',
        kickChannel: 'Canal de Kick',
        twitchChannel: 'Canal de Twitch',
        connect: 'Conectar',
        connectedTo: 'Conectado a:',
        language: 'Idioma',
        changeChannel: 'Cambiar Canal',
        settings: 'Configuración',
        keyword: 'Palabra clave (opcional):',
        allowDualEntry: 'Permitir entrada doble (Kick + Twitch)',
        excludeMods: 'Excluir Moderadores',
        showWinnerChat: 'Mostrar chat del ganador en el modal',
        timerDuration: 'Duración del Temporizador (segundos):',
        animation: 'Animación del Sorteo:',
        animScramble: 'Aleatorio (letras)',
        animNone: 'Ninguna',
        multipliers: 'Multiplicadores de Suerte',
        platform: 'Plataforma',
        botSettings: 'Configuración del Bot',

        enableTwitchBot: 'Activar Bot de Twitch',
        botUsername: 'Nombre de usuario del Bot (Twitch)',
        botUsernamePlaceholder: 'Nombre de tu bot',
        botToken: 'Token OAuth del Bot (Twitch)',
        startMessage: 'Mensaje de Inicio del Sorteo ({keyword})',
        announceMessage: 'Mensaje de Anuncio ({winner}, {platform}, {chance}%)',
        defaultStartMessage: '¡Un nuevo sorteo ha comenzado! Escribe {keyword} para entrar.',
        defaultAnnounceMessage: '¡Felicidades @{winner}, ganaste el sorteo desde {platform} con un {chance}% de chance! 🎉',
        
        enableKickBot: 'Activar Bot de Kick (vía Kicklet)',
        kickletApiToken: 'Token de API de Kicklet',
        kickStartMessage: 'Mensaje de Inicio (Kick) ({keyword})',
        kickAnnounceMessage: 'Mensaje de Anúncio (Kick) ({winner}, {platform}, {chance}%)',
        defaultKickStartMessage: '¡Un nuevo sorteo ha comenzado! Escribe {keyword} para entrar.',
        defaultKickAnnounceMessage: '¡Felicidades @{winner}, ganaste el sorteo desde {platform} con un {chance}% de chance! 🎉',
        
        kickletTokenTooltip: 'Obtén esto en la Configuración de TU Perfil de Kicklet <a href=\"https://kicklet.app/profile/settings\" target=\"_blank\">https://kicklet.app/profile/settings</a> inicia sesión en tu cuenta, ve a "API tokens" y haz clic para crear un bot, elige el nombre que quieras, copia y pega el token aquí<br><br>Esto permite que la herramienta envie mensajes como el bot Kicklet en tu chat.',
        kickStartMessageTooltip: 'Mensaje que el bot Kicklet enviará al hacer clic en "Iniciar Sorteo".<br><br><code>{keyword}</code> se reemplaza por tu palabra clave.',
        kickAnnounceMessageTooltip: 'Mensaje que el bot Kicklet enviará cuando se sortee un ganador.<br><br><code>{winner}</code> se reemplaza por el nombre del ganador.<br><code>{platform}</code> se reemplaza por "Kick" ou "Twitch".<br><code>{chance}</code> se reemplaza por el % de probabilidad de ganar del ganador (basado en sus entradas).',

        saveSettings: 'Guardar Configuración',
        statusWaiting: 'Presiona "Iniciar Sorteio" para conectarte a lo(s) chat(s).',
        statusConnected: '¡Conectado! Esperando entradas.',
        statusError: 'Error de conexión.',
        kickError: 'Error de conexión con Kick.',
        kickLost: 'Se perdió la conexión con Kick.',
        startGiveaway: 'Iniciar Sorteio',
        participants: 'Participantes',
        drawWinner: 'Sortear Ganador',
        reset: 'Reiniciar',
        winners: 'Ganadores',
        drawing: 'Sorteando...',
        ok: 'OK',
        drawAgain: 'Sortear de Nuevo',
        alertNoParticipants: '¡No hay participantes para sortear!',
        alertKickConnectFail: 'No se pudo encontrar el canal de Kick:',
        alertKickChatroomFail: 'No se pudo obtener el ID de la sala de chat de Kick.',
        alertNoChannel: 'Por favor, introduce al menos un nombre de canal.',
        alertConnectFail: 'Falló la conexión:',
        alertSettingsSaved: '¡Configuración guardada!',
        credits: 'Versão atualizada del proyecto kickaway (github) por darcherman v2.0',
        allowDualEntryTooltip: 'Si está marcado, un usuario puede entrar una vez en Kick Y una vez en Twitch, duplicando sus oportunidades.<br><br>Si está desmarcado, la primera entrada (de cualquier plataforma) es la única que cuenta.',
        botTokenTooltip: 'Esta es la "contraseña" de tu cuenta de bot.<br><br><strong>Cómo obtenerla:</strong><br>1. Crea una nueva cuenta de Twitch para tu bot (ej: "MiBot").<br>2. Activa la Autenticação de 2 Factores (2FA) en ella.<br>3. Ve a <code>twitchtokengenerator.com</code> y obtén el "Access Token".<br>4. Pega el token aquí y añade <code>oauth:</code> delante (ej: <code>oauth:abcdef123...</code>).',
        startMessageTooltip: 'Mensaje que el bot enviará cuando hagas clic en "Iniciar Sorteio".<br><br><code>{keyword}</code> se reemplaza por tu palabra clave. Si no hay palabra clave, se reemplazará por "cualquer mensaje".',
        announceMessageTooltip: 'El mensaje que tu bot enviará al chat de Twitch cuando se sortee un ganador.<br><br><code>{winner}</code> se reemplaza por el nombre del ganador.<br><code>{platform}</code> se reemplaza por "Kick" ou "Twitch".<br><code>{chance}</code> se reemplaza por el % de probabilidad de ganar del ganador (basado en sus entradas).',
        
        multipliersTooltip: "Aumenta la probabilidad de que un usuario gane.<br><br><strong>Ejemplo:</strong> Si el valor es '2', un SUB tendrá 2x más probabilidades (2 'boletos' en el sorteo).<br><br><strong>IMPORTANTE (KICK):</strong> Para que el multiplicador de Sub y VIP de Kick funcione, el usuario debe tener su <strong>insignia (badge) de Sub/VIP activada</strong> en la configuración de chat de tu canal de Kick.",

        chatWaitingForMessage: 'Esperando un mensaje del ganador...',
        keywordAnyMessage: 'cualquer mensaje',

        pauseGiveaway: 'Parar Entradas',
        resumeGiveaway: 'Reanudar Entradas',
        statusPaused: 'Las entradas están pausadas.',
        closedMessages: 'Mensajes de "Entradas Cerradas"',
        closedMessagesDesc: 'Mensajes que envían los bots al parar las entradas.',
        twitchClosedMessage: 'Mensaje "Cerrado" (Twitch)',
        kickClosedMessage: 'Mensaje "Cerrado" (Kick)',
        closedMessageTooltip: 'Mensaje que el bot enviará al hacer clic en "Parar Entradas".',
        defaultTwitchClosedMessage: '¡Las entradas están cerradas! Buena suerte.',
        defaultKickClosedMessage: '¡Las entradas están cerradas! Buena suerte.',

        enableAwardsOverlay: 'Panel de Premios',
        awardsDv: 'DV (Login)',
        awardsApiKey: 'Clave de API',
        awardsOverlayTooltip: 'Introduce las credenciales para tu panel de premios.<br><br>Se guardan localmente al hacer clic en "Guardar Configuración".',
        awardsPanelTitle: 'Premios Actuales',
        awardsStatusLoading: 'Cargando premios...',
        awardsStatusError: 'Comprueba las credenciales en Configuración.',
        awardsStatusApiError: 'Error de API. Reintentando...',
        awardsStatusNoAwards: 'No hay premios disponibles.',
        awardAnnounceMessageLabel: 'Mensaje de Anuncio de Premio ({award})',
        awardAnnounceMessageTooltip: 'El mensaje que enviarán tus bots al hacer clic en un premio.<br><br><code>{award}</code> se reemplaza por el nombre del premio.',
        defaultAwardAnnounceMessage: 'Próximo sorteo: ¡{award}!'
    },
    // === NOVA LINGUAGEM ADICIONADA: VIETNAMITA ===
    'vi': {
        appTitle: 'Công cụ Quay số',
        loginSubtitle: 'Nhập (các) kênh để quay số. Bạn có thể kết nối một hoặc cả hai.',
        kickChannel: 'Kênh Kick',
        twitchChannel: 'Kênh Twitch',
        connect: 'Kết nối',
        connectedTo: 'Đã kết nối tới:',
        language: 'Ngôn ngữ',
        changeChannel: 'Đổi kênh',
        settings: 'Cài đặt',
        keyword: 'Từ khóa (tùy chọn):',
        allowDualEntry: 'Cho phép tham gia kép (Kick + Twitch)',
        excludeMods: 'Loại trừ Người điều hành',
        showWinnerChat: 'Hiển thị chat của người thắng',
        timerDuration: 'Thời gian đếm ngược (giây):',
        animation: 'Hiệu ứng quay số:',
        animScramble: 'Xáo trộn ký tự',
        animNone: 'Không có',
        multipliers: 'Hệ số may mắn',
        platform: 'Nền tảng',
        botSettings: 'Cài đặt Bot',

        enableTwitchBot: 'Bật Bot Twitch',
        botUsername: 'Tên người dùng Bot (Twitch)',
        botUsernamePlaceholder: 'Tên bot của bạn',
        botToken: 'Token OAuth của Bot (Twitch)',
        startMessage: 'Tin nhắn bắt đầu quay số ({keyword})',
        announceMessage: 'Tin nhắn thông báo người thắng ({winner}, {platform}, {chance}%)',
        defaultStartMessage: 'Một đợt quay số mới đã bắt đầu! Gõ {keyword} để tham gia!',
        defaultAnnounceMessage: 'Chúc mừng @{winner}, bạn đã thắng quay số từ {platform} với {chance}% cơ hội! 🎉',
        
        enableKickBot: 'Bật Bot Kick (qua Kicklet)',
        kickletApiToken: 'Token API Kicklet',
        kickStartMessage: 'Tin nhắn bắt đầu (Kick) ({keyword})',
        kickAnnounceMessage: 'Tin nhắn thông báo (Kick) ({winner}, {platform}, {chance}%)',
        defaultKickStartMessage: 'Một đợt quay số mới đã bắt đầu! Gõ {keyword} để tham gia!',
        defaultKickAnnounceMessage: 'Chúc mừng @{winner}, bạn đã thắng quay số từ {platform} với {chance}% cơ hội! 🎉',
        
        kickletTokenTooltip: 'Lấy mã này từ Cài đặt Hồ sơ Kicklet CỦA BẠN <a href=\"https://kicklet.app/profile/settings\" target=\"_blank\">https://kicklet.app/profile/settings</a> đăng nhập vào tài khoản của bạn, đi tới "API tokens" và nhấp để tạo bot, chọn bất kỳ tên nào bạn muốn, sao chép và dán token vào đây<br><br>Điều này cho phép công cụ gửi tin nhắn dưới dạng bot Kicklet trong cuộc trò chuyện của bạn.',
        kickStartMessageTooltip: 'Tin nhắn mà bot Kicklet sẽ gửi khi bạn nhấp vào "Bắt đầu Quay số".<br><br><code>{keyword}</code> được thay thế bằng từ khóa của bạn.',
        kickAnnounceMessageTooltip: 'Tin nhắn mà bot Kicklet sẽ gửi khi có người chiến thắng.<br><br><code>{winner}</code> được thay thế bằng tên người thắng.<br><code>{platform}</code> được thay thế bằng "Kick" hoặc "Twitch".<br><code>{chance}</code> được thay thế bằng % cơ hội thắng của người đó.',

        saveSettings: 'Lưu Cài đặt',
        statusWaiting: 'Nhấn "Bắt đầu Quay số" để kết nối với (các) kênh chat.',
        statusConnected: 'Đã kết nối! Đang chờ người tham gia.',
        statusError: 'Lỗi kết nối.',
        kickError: 'Lỗi kết nối Kick.',
        kickLost: 'Mất kết nối Kick.',
        startGiveaway: 'Bắt đầu Quay số',
        participants: 'Người tham gia',
        drawWinner: 'Quay số',
        reset: 'Đặt lại',
        winners: 'Người chiến thắng',
        drawing: 'Đang quay số...',
        ok: 'OK',
        drawAgain: 'Quay lại',
        alertNoParticipants: 'Không có người tham gia để quay số!',
        alertKickConnectFail: 'Không tìm thấy kênh Kick:',
        alertKickChatroomFail: 'Không thể lấy ID phòng chat Kick.',
        alertNoChannel: 'Vui lòng nhập ít nhất một tên kênh.',
        alertConnectFail: 'Kết nối thất bại:',
        alertSettingsSaved: 'Đã lưu cài đặt!',
        credits: 'Phiên bản cập nhật của dự án kickaway (github) bởi darcherman v2.0',
        allowDualEntryTooltip: 'Nếu được chọn, người dùng có thể tham gia một lần trên Kick VÀ một lần trên Twitch, nhân đôi cơ hội của họ.<br><br>Nếu không được chọn, lần tham gia đầu tiên (từ bất kỳ nền tảng nào) là lần duy nhất được tính.',
        botTokenTooltip: 'Đây là "mật khẩu" cho tài khoản bot của bạn.<br><br><strong>Cách lấy:</strong><br>1. Tạo một tài khoản Twitch mới cho bot của bạn (ví dụ: "MyBot").<br>2. Bật Xác thực 2 yếu tố (2FA) trên đó.<br>3. Truy cập <code>twitchtokengenerator.com</code> và lấy "Access Token".<br>4. Dán token vào đây và thêm <code>oauth:</code> ở trước (ví dụ: <code>oauth:abcdef123...</code>).',
        startMessageTooltip: 'Tin nhắn bot sẽ gửi khi bạn nhấp "Bắt đầu Quay số".<br><br><code>{keyword}</code> được thay thế bằng từ khóa của bạn. Nếu không có từ khóa, nó sẽ được thay thế bằng "bất kỳ tin nhắn nào".',
        announceMessageTooltip: 'Tin nhắn bot sẽ gửi đến chat Twitch khi có người chiến thắng.<br><br><code>{winner}</code> được thay thế bằng tên người thắng.<br><code>{platform}</code> được thay thế bằng "Kick" hoặc "Twitch".<br><code>{chance}</code> được thay thế bằng % cơ hội thắng.',
        
        multipliersTooltip: "Tăng cơ hội thắng của người dùng.<br><br><strong>Ví dụ:</strong> Nếu giá trị là '2', một SUB sẽ có 2x cơ hội (2 'vé' trong đợt quay).<br><br><strong>QUAN TRỌNG (KICK):</strong> Để hệ số nhân Sub và VIP của Kick hoạt động, người dùng phải <strong>bật huy hiệu Sub/VIP</strong> của họ trong cài đặt trò chuyện trên kênh Kick của bạn.",

        chatWaitingForMessage: 'Đang chờ tin nhắn từ người thắng...',
        keywordAnyMessage: 'bất kỳ tin nhắn nào',

        pauseGiveaway: 'Dừng tham gia',
        resumeGiveaway: 'Tiếp tục tham gia',
        statusPaused: 'Đã tạm dừng tham gia.',
        closedMessages: 'Tin nhắn "Đã đóng"',
        closedMessagesDesc: 'Tin nhắn được gửi bởi bot khi bạn dừng tham gia.',
        twitchClosedMessage: 'Tin nhắn "Đã đóng" (Twitch)',
        kickClosedMessage: 'Tin nhắn "Đã đóng" (Kick)',
        closedMessageTooltip: 'Tin nhắn bot sẽ gửi khi bạn nhấp "Dừng tham gia".',
        defaultTwitchClosedMessage: 'Đã đóng đăng ký! Chúc may mắn.',
        defaultKickClosedMessage: 'Đã đóng đăng ký! Chúc may mắn.',

        enableAwardsOverlay: 'Bảng Phần thưởng',
        awardsDv: 'DV (Đăng nhập)',
        awardsApiKey: 'Khóa API',
        awardsOverlayTooltip: 'Nhập thông tin đăng nhập cho bảng phần thưởng của bạn.<br><br>Chúng được lưu cục bộ khi nhấp vào "Lưu Cài đặt".',
        awardsPanelTitle: 'Phần thưởng Hiện tại',
        awardsStatusLoading: 'Đang tải phần thưởng...',
        awardsStatusError: 'Kiểm tra thông tin đăng nhập trong Cài đặt.',
        awardsStatusApiError: 'Lỗi API. Đang thử lại...',
        awardsStatusNoAwards: 'Không có phần thưởng nào.',
        awardAnnounceMessageLabel: 'Tin nhắn Thông báo Phần thưởng ({award})',
        awardAnnounceMessageTooltip: 'Tin nhắn bot sẽ gửi khi bạn nhấp vào một phần thưởng.<br><br><code>{award}</code> được thay thế bằng tên phần thưởng.',
        defaultAwardAnnounceMessage: 'Vòng quay số tiếp theo: {award}!'
    }
};

// Função para definir o idioma
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en'; 
    
    currentLang = lang;
    
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (el.tagName === 'SPAN' && translations[lang][key]) {
            el.textContent = translations[lang][key];
        } else if (el.tagName !== 'SPAN' && translations[lang][key]) {
            const firstChild = el.firstElementChild;
            if (firstChild && firstChild.tagName === 'SPAN' && firstChild.hasAttribute('data-lang-key')) {
                 // Não faz nada
            } else {
                if (el.id === 'pause-giveaway-button') {
                    if (!el.classList.contains('paused')) {
                        el.textContent = translations[lang][key];
                    }
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        }
    });

    document.querySelectorAll('[placeholder-lang-key]').forEach(el => {
        const key = el.placeholderLangKey;
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    localStorage.setItem('giveawayToolLang', lang);

    const langSelectLogin = document.getElementById('language-select-login');
    const langSelectSettings = document.getElementById('language-select-settings');
    if (langSelectLogin.value !== lang) langSelectLogin.value = lang;
    if (langSelectSettings.value !== lang) langSelectSettings.value = lang;
}

// Função para obter o idioma inicial
function getInitialLanguage() {
    const savedLang = localStorage.getItem('giveawayToolLang');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    return 'en';
}


document.addEventListener('DOMContentLoaded', () => {
    // --- SELETORES DE ELEMENTOS ---
    const loginScreen = document.getElementById('login-screen');
    const mainScreen = document.getElementById('main-screen');
    
    const kickChannelInput = document.getElementById('kick-channel-input');
    const twitchChannelInput = document.getElementById('twitch-channel-input');
    const connectButton = document.getElementById('connect-button');
    
    const connectedKickChannel = document.getElementById('connected-kick-channel');
    const connectedTwitchChannel = document.getElementById('connected-twitch-channel');
    
    const headerMenuToggle = document.getElementById('header-menu-toggle');
    const headerMenuDropdown = document.getElementById('header-menu-dropdown');
    const changeChannelButton = document.getElementById('change-channel-button');
    const languageSelectLogin = document.getElementById('language-select-login');
    const languageSelectSettings = document.getElementById('language-select-settings');
    
    const keywordInput = document.getElementById('keyword-input');
    const allowMultiPlatformCheckbox = document.getElementById('allow-multi-platform-checkbox');
    const excludeModsCheckbox = document.getElementById('exclude-mods-checkbox');
    const showWinnerChatCheckbox = document.getElementById('show-winner-chat-checkbox');
    const winnerTimerDurationInput = document.getElementById('winner-timer-duration-input');
    const animationSelect = document.getElementById('animation-select');
    
    const kickSubMultiplier = document.getElementById('kick-sub-multiplier');
    const kickVipMultiplier = document.getElementById('kick-vip-multiplier');
    const twitchSubMultiplier = document.getElementById('twitch-sub-multiplier');
    const twitchVipMultiplier = document.getElementById('twitch-vip-multiplier');
    
    const enableTwitchBotCheckbox = document.getElementById('enable-twitch-bot-checkbox');
    const twitchBotSettingsWrapper = document.getElementById('twitch-bot-settings-wrapper');
    const twitchBotUsernameInput = document.getElementById('twitch-bot-username-input');
    const twitchBotOauthInput = document.getElementById('twitch-bot-oauth-input');
    const startMessageInput = document.getElementById('start-message-input');
    const announcementMessageInput = document.getElementById('announcement-message-input');
    
    const enableKickBotCheckbox = document.getElementById('enable-kick-bot-checkbox');
    const kickBotSettingsWrapper = document.getElementById('kick-bot-settings-wrapper');
    const kickletApiTokenInput = document.getElementById('kicklet-api-token-input');
    const kickStartMessageInput = document.getElementById('kick-start-message-input');
    const kickAnnounceMessageInput = document.getElementById('kick-announcement-message-input');

    const toggleTwitchBotPanel = document.getElementById('toggle-twitch-bot-panel');
    const twitchEyeIconOpen = document.getElementById('twitch-eye-icon-open');
    const twitchEyeIconClosed = document.getElementById('twitch-eye-icon-closed');
    const toggleKickBotPanel = document.getElementById('toggle-kick-bot-panel');
    const kickEyeIconOpen = document.getElementById('kick-eye-icon-open');
    const kickEyeIconClosed = document.getElementById('kick-eye-icon-closed');
    
    // === NOVOS SELETORES (MULTIPLIERS) ===
    const toggleMultipliersPanel = document.getElementById('toggle-multipliers-panel');
    const multipliersSettingsWrapper = document.getElementById('multipliers-settings-wrapper');
    const multipliersEyeIconOpen = document.getElementById('multipliers-eye-icon-open');
    const multipliersEyeIconClosed = document.getElementById('multipliers-eye-icon-closed');
    // === FIM DOS NOVOS SELETORES ===

    const toggleAwardsOverlayPanel = document.getElementById('toggle-awards-overlay-panel');
    const enableAwardsOverlayCheckbox = document.getElementById('enable-awards-overlay-checkbox');
    const awardsOverlaySettingsWrapper = document.getElementById('awards-overlay-settings-wrapper');
    const awardsDvInput = document.getElementById('awards-dv-input');
    const awardsApiKeyInput = document.getElementById('awards-api-key-input');
    const awardAnnounceMessageInput = document.getElementById('award-announce-message-input'); 
    
    const awardsOverlayPanel = document.getElementById('awards-overlay-panel');
    const awardsListContainer = document.getElementById('awards-list-container');
    const awardsCount = document.getElementById('awards-count');
    const awardsStatusMessage = document.getElementById('awards-status-message');

    const toggleClosedMessagePanel = document.getElementById('toggle-closed-message-panel');
    const closedMessageSettingsWrapper = document.getElementById('closed-message-settings-wrapper');
    const eyeIconOpen = document.getElementById('eye-icon-open');
    const eyeIconClosed = document.getElementById('eye-icon-closed');
    const twitchClosedMessageInput = document.getElementById('twitch-closed-message-input');
    const kickClosedMessageInput = document.getElementById('kick-closed-message-input');
    
    const saveSettingsButton = document.getElementById('save-settings-button');
    const statusMessage = document.getElementById('status-message');
    const startGiveawayButton = document.getElementById('start-giveaway-button');
    
    const participantCount = document.getElementById('participant-count');
    const participantList = document.getElementById('participant-list');
    const drawButton = document.getElementById('draw-button');
    const resetButton = document.getElementById('reset-button');
    const pauseGiveawayButton = document.getElementById('pause-giveaway-button');
    
    const winnersCount = document.getElementById('winners-count');
    const winnersList = document.getElementById('winners-list');
    const winnersPanel = document.querySelector('.winners-panel');
    
    const multiWinnerModalContainer = document.getElementById('multi-winner-modal-container');
    const modalTemplate = document.getElementById('modal-template');
    
    const tooltipPopup = document.getElementById('tooltip-popup-container');

    // --- VARIÁVEIS DE ESTADO ---
    let kickChannel = null, twitchChannel = null;
    let kickChatroomId = null;
    let kickWs = null, twitchClient = null;
    let isGiveawayRunning = false;
    let participants = new Map();
    let allEntries = []; 
    let winners = [];
    let currentLang = 'en';
    
    let winningUsernames = new Set(); 

    let winnerCountdownInterval = null;
    let currentMonitoredWinnerId = null;
    let currentMonitoredChatbox = null;
    let hasWinnerResponded = false;
    
    let awardsApiTimer = null;
    let isAwardsLoading = false;
    let lastValidAwards = [];
    let awardsApiAttempts = 0;
    let awardsUsingProxy = false;


    // --- FUNÇÕES PRINCIPAIS ---

    function showScreen(screenName) {
        loginScreen.style.display = 'none';
        mainScreen.style.display = 'none';
        if (screenName === 'login') {
            loginScreen.style.display = 'flex';
        } else if (screenName === 'main') {
            mainScreen.style.display = 'flex';
        }
    }
    
    function showAlert(langKey, ...args) {
        let message = translations[currentLang][langKey];
        if (args.length > 0) {
            message = `${message} ${args.join(' ')}`;
        }
        alert(message);
    }

    async function handleConnect() {
        const kickChannelName = kickChannelInput.value.trim().toLowerCase();
        const twitchChannelName = twitchChannelInput.value.trim().toLowerCase();

        if (!kickChannelName && !twitchChannelName) {
            showAlert('alertNoChannel');
            return;
        }

        connectButton.disabled = true;
        connectButton.textContent = 'Connecting...';

        try {
            if (kickChannelName) {
                const response = await fetch(`https://kick.com/api/v1/channels/${kickChannelName}`);
                if (!response.ok) throw new Error(`${translations[currentLang].alertKickConnectFail} ${kickChannelName}`);
                const data = await response.json();
                kickChatroomId = data.chatroom?.id;
                if (!kickChatroomId) throw new Error(translations[currentLang].alertKickChatroomFail);
                kickChannel = kickChannelName;
                connectedKickChannel.textContent = kickChannel;
                connectedKickChannel.classList.add('platform-kick');
                connectedKickChannel.style.display = 'inline-block';
            } else {
                 connectedKickChannel.style.display = 'none';
            }

            if (twitchChannelName) {
                twitchChannel = twitchChannelName;
                connectedTwitchChannel.textContent = twitchChannel;
                connectedTwitchChannel.classList.add('platform-twitch');
                connectedTwitchChannel.style.display = 'inline-block';
            } else {
                 connectedTwitchChannel.style.display = 'none';
            }

            loadSettings();
            showScreen('main');

        } catch (error) {
            showAlert('alertConnectFail', error.message);
        } finally {
            connectButton.disabled = false;
            setLanguage(currentLang);
        }
    }

    // --- FUNÇÃO: Enviar Mensagem via Kicklet ---
    async function sendKickletMessage(messageContent) {
        const token = kickletApiTokenInput.value.trim();
        if (!enableKickBotCheckbox.checked || !token || !messageContent) {
            return;
        }
        
        try {
            const response = await fetch('https://kicklet.app/api/kick/message', {
                method: 'POST',
                headers: {
                    'Authorization': `apitoken ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    content: messageContent
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Erro ao enviar mensagem pelo Kicklet:', errorData);
            } else {
                console.log('Mensagem enviada pelo Kicklet com sucesso.');
            }
        } catch (error) {
            console.error('Falha na requisição ao Kicklet:', error);
        }
    }
    
    // --- FUNÇÃO: Enviar Mensagem pela Twitch (COM LÓGICA ON-DEMAND) ---
    function sendTwitchMessage(messageContent) {
        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        
        if (!twitchChannel || !enableTwitchBotCheckbox.checked || !botUsername || !botOauth || !messageContent) {
            return; 
        }

        if (twitchClient && twitchClient.readyState() === 'OPEN') {
            twitchClient.say(twitchChannel, messageContent)
                .catch((err) => console.error('Erro ao enviar mensagem (Twitch principal):', err));
        } 
        else {
            console.log('Cliente TMI principal não está conectado. Criando conexão temporária...');
            const tempClient = new tmi.Client({
                connection: { secure: true, reconnect: false },
                identity: { username: botUsername, password: botOauth },
                channels: [twitchChannel]
            });
            
            tempClient.once('connected', () => {
                tempClient.say(twitchChannel, messageContent)
                    .then(() => {
                        tempClient.disconnect();
                    })
                    .catch((err) => {
                        console.error('Erro ao enviar mensagem (Twitch temp):', err);
                        tempClient.disconnect();
                    });
            });

            tempClient.on('disconnected', () => {
                console.log('Cliente TMI temporário desconectado.');
            });

            tempClient.connect().catch((err) => {
                console.error('Falha ao conectar cliente TMI temporário:', err);
            });
        }
    }
    
    function sendTwitchClosedMessage() {
        sendTwitchMessage(twitchClosedMessageInput.value);
    }

    function sendKickClosedMessage() {
        sendKickletMessage(kickClosedMessageInput.value);
    }


    function handleStartGiveaway() {
        if (!kickChannel && !twitchChannel) {
            showAlert('alertNoChannel');
            return;
        }
        
        resetGiveawayState();
        isGiveawayRunning = true;
        setInputsDisabled(true);
        statusMessage.textContent = translations[currentLang].statusConnected;
        statusMessage.className = 'status-connected';

        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        
        if (twitchChannel && enableTwitchBotCheckbox.checked && botUsername && botOauth) {
            const sendMessage = () => {
                const messageTemplate = startMessageInput.value;
                if (!messageTemplate) return; 

                let keyword = keywordInput.value.trim();
                let keywordText = (keyword === '') ? translations[currentLang].keywordAnyMessage : keyword;
                
                let message = messageTemplate.replace('{keyword}', keywordText);
                sendTwitchMessage(message);
            };

            if (twitchClient) {
                twitchClient.disconnect();
                twitchClient = null;
            }

            twitchClient = new tmi.Client({
                connection: { secure: true, reconnect: true },
                identity: { username: botUsername, password: botOauth },
                channels: [twitchChannel]
            });
            
            twitchClient.once('connected', () => {
                console.log('Cliente TMI principal conectado para o sorteio.');
                sendMessage(); 
                statusMessage.textContent = translations[currentLang].statusConnected;
                statusMessage.className = 'status-connected';
            });
            
            twitchClient.on('message', (channel, userstate, message, self) => {
                if (self) return;
                handleTwitchMessage(userstate, message);
            });

            twitchClient.connect().catch(console.error);
        }
        
        if (kickChannel && enableKickBotCheckbox.checked) {
            const messageTemplate = kickStartMessageInput.value;
            if (messageTemplate) {
                let keyword = keywordInput.value.trim();
                let keywordText = (keyword === '') ? translations[currentLang].keywordAnyMessage : keyword;
                let message = messageTemplate.replace('{keyword}', keywordText);
                sendKickletMessage(message);
            }
        }

        if (kickChannel) connectToKick();
        
        if (!twitchClient && twitchChannel && !enableTwitchBotCheckbox.checked) {
            connectToTwitch();
        }
    }
    
    function handlePauseGiveaway() {
        isGiveawayRunning = !isGiveawayRunning; 

        if (isGiveawayRunning) {
            pauseGiveawayButton.textContent = translations[currentLang].pauseGiveaway;
            pauseGiveawayButton.classList.remove('paused');
            statusMessage.textContent = translations[currentLang].statusConnected;
            statusMessage.className = 'status-connected';
            startGiveawayButton.disabled = true;

        } else {
            pauseGiveawayButton.textContent = translations[currentLang].resumeGiveaway;
            pauseGiveawayButton.classList.add('paused');
            statusMessage.textContent = translations[currentLang].statusPaused;
            statusMessage.className = 'status-waiting';
            startGiveawayButton.disabled = true;

            sendTwitchClosedMessage();
            sendKickClosedMessage();
        }
    }
    
    function appendMessageToWinnerChat(message, chatBox) {
        if (!hasWinnerResponded) {
            chatBox.innerHTML = '';
            chatBox.classList.remove('no-messages');
            hasWinnerResponded = true;
        }
        
        const p = document.createElement('p');
        p.textContent = message;
        chatBox.appendChild(p);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function stopWinnerTimer() {
        if (winnerCountdownInterval) {
            clearInterval(winnerCountdownInterval);
            winnerCountdownInterval = null;
            
            const timerDisplay = multiWinnerModalContainer.querySelector('#modal-timer-display');
            if (timerDisplay) {
                timerDisplay.style.color = 'var(--success-color)';
                timerDisplay.style.borderColor = 'var(--success-color)';
            }
        }
    }
    
    // --- LÓGICA DO KICK ---
    function connectToKick() {
        const KICK_WS_URL = 'wss://ws-us2.pusher.com/app/32cbd69e4b950bf97679?protocol=7&client=js&version=8.4.0&flash=false';
        if (kickWs && kickWs.readyState === WebSocket.OPEN) kickWs.close();
        kickWs = new WebSocket(KICK_WS_URL);
        kickWs.onopen = () => {
             kickWs.send(JSON.stringify({ event: 'pusher:subscribe', data: { auth: '', channel: `chatrooms.${kickChatroomId}.v2` } }));
        };
        kickWs.onmessage = (event) => {
            const parsed = JSON.parse(event.data);
            if (parsed.event === 'pusher_internal:subscription_succeeded') {
                console.log('Successfully subscribed to Kick chat.');
                statusMessage.textContent = translations[currentLang].statusConnected;
                statusMessage.className = 'status-connected';
            }
            if (parsed.event === 'App\\Events\\ChatMessageEvent') {
                handleKickMessage(JSON.parse(parsed.data));
            }
        };
        kickWs.onerror = (error) => {
            console.error('Kick WebSocket Error:', error);
            statusMessage.textContent = translations[currentLang].kickError;
            statusMessage.className = 'status-error';
        };
        kickWs.onclose = () => {
            console.log('Kick WebSocket disconnected.');
            if (isGiveawayRunning) {
                statusMessage.textContent = translations[currentLang].kickLost;
                statusMessage.className = 'status-error';
            }
        };
    }

    function handleKickMessage(msgData) {
        const user = msgData.sender;
        if (!user) return;
        
        const uniqueId = `kick-${user.username}`;
        const messageContent = msgData.content.trim();

        if (currentMonitoredWinnerId === uniqueId && currentMonitoredChatbox) {
            appendMessageToWinnerChat(messageContent, currentMonitoredChatbox);
            stopWinnerTimer();
        }
        
        if (!isGiveawayRunning) return;

        const usernameLower = user.username.toLowerCase();
        if (winningUsernames.has(usernameLower)) {
            return;
        }
        
        const keyword = keywordInput.value.trim().toLowerCase();
        
        if (keyword !== '' && messageContent.toLowerCase() !== keyword) return;

        const badges = user.identity?.badges || [];
        if (excludeModsCheckbox.checked) {
            const isMod = badges.some(b => b.type === 'moderator' || b.type === 'broadcaster');
            if (isMod) return;
        }

        if (participants.has(uniqueId)) return;

        if (!allowMultiPlatformCheckbox.checked && Array.from(participants.values()).some(p => p.username.toLowerCase() === usernameLower && !p.hasWon)) {
            return;
        }

        const userStatus = {
            isSub: badges.some(b => b.type === 'subscriber' || b.type === 'founder'),
            isVip: badges.some(b => 
                (b.type && (b.type.toLowerCase() === 'vip' || b.type.toLowerCase() === 'og')) ||
                (b.text && (b.text.toLowerCase() === 'vip' || b.text.toLowerCase() === 'og'))
            )
        };
        addParticipant(user.username, 'kick', userStatus);
    }
    
    
    // --- LÓGICA DO TWITCH ---
    function connectToTwitch() {
        if (twitchClient && twitchClient.readyState() === 'OPEN') {
            return;
        }
        
        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        
        const identity = (enableTwitchBotCheckbox.checked && botUsername && botOauth)
            ? { username: botUsername, password: botOauth }
            : null;
            
        const clientOptions = {
            connection: { secure: true, reconnect: true },
            identity: identity,
            channels: [twitchChannel]
        };
        
        twitchClient = new tmi.Client(clientOptions);
        
        twitchClient.on('connected', () => {
            console.log('Cliente TMI principal conectado.');
            if (isGiveawayRunning) {
                statusMessage.textContent = translations[currentLang].statusConnected;
                statusMessage.className = 'status-connected';
            }
        });
        
        twitchClient.on('message', (channel, userstate, message, self) => {
            if (self && (!identity || userstate.username.toLowerCase() !== identity.username.toLowerCase())) return;
            handleTwitchMessage(userstate, message);
        });
        
        twitchClient.connect().catch(console.error);
    }

    function handleTwitchMessage(userstate, message) {
        const username = userstate['display-name'];
        const uniqueId = `twitch-${username}`;
        const messageContent = message.trim();

        if (currentMonitoredWinnerId === uniqueId && currentMonitoredChatbox) {
            appendMessageToWinnerChat(messageContent, currentMonitoredChatbox);
            stopWinnerTimer();
        }

        if (!isGiveawayRunning) return;
        
        const usernameLower = username.toLowerCase();
         if (winningUsernames.has(usernameLower)) {
            return;
        }
        
        const keyword = keywordInput.value.trim().toLowerCase();
        
        if (keyword !== '' && messageContent.toLowerCase() !== keyword) return;
        
        if (excludeModsCheckbox.checked) {
            const isMod = userstate.mod || userstate.badges?.broadcaster;
            if (isMod) return;
        }

        if (participants.has(uniqueId)) return;
        
        if (!allowMultiPlatformCheckbox.checked && Array.from(participants.values()).some(p => p.username.toLowerCase() === usernameLower && !p.hasWon)) {
            return;
        }
        
        const userStatus = {
            isSub: userstate.subscriber || userstate.badges?.founder === '0',
            isVip: !!userstate.vip
        };
        addParticipant(username, 'twitch', userStatus);
    }

    // --- LÓGICA DO SORTEIO ---
    function addParticipant(username, platform, status) {
        const uniqueId = `${platform}-${username}`;
        if (participants.has(uniqueId)) return;
        
        let entries = 1;
        let tags = [];
        if (platform === 'kick') {
            if (status.isSub) {
                entries = Math.max(entries, parseInt(kickSubMultiplier.value, 10) || 1);
                tags.push({ text: 'SUB', class: 'sub' });
            }
            if (status.isVip) {
                entries = Math.max(entries, parseInt(kickVipMultiplier.value, 10) || 1);
                tags.push({ text: 'VIP', class: 'vip' });
            }
        } else if (platform === 'twitch') {
            if (status.isSub) {
                entries = Math.max(entries, parseInt(twitchSubMultiplier.value, 10) || 1);
                 tags.push({ text: 'SUB', class: 'sub' });
            }
            if (status.isVip) {
                entries = Math.max(entries, parseInt(twitchVipMultiplier.value, 10) || 1);
                 tags.push({ text: 'VIP', class: 'vip' });
            }
        }
        
        participants.set(uniqueId, { username, platform, entries, tags, hasWon: false });
        
        updateParticipantListUI();
    }


    function drawWinner() {
        allEntries = [];
        participants.forEach((p, id) => {
            if (!p.hasWon) {
                for (let i = 0; i < p.entries; i++) {
                    allEntries.push(id);
                }
            }
        });

        if (allEntries.length === 0) {
            showAlert('alertNoParticipants');
            return;
        }
        drawButton.disabled = true;
        
        const winnerUniqueId = allEntries[Math.floor(Math.random() * allEntries.length)];
        const winnerObject = participants.get(winnerUniqueId);
        
        if (!winnerObject) {
            drawButton.disabled = allEntries.length === 0;
            if (allEntries.length > 0) {
                drawWinner();
            }
            return;
        }
        
        const winnerName = winnerObject.username;
        const winnerPlatform = winnerObject.platform;
        
        const winnerEntries = winnerObject.entries;
        const totalEntriesInDraw = allEntries.length;
        const chancePercent = ((winnerEntries / totalEntriesInDraw) * 100).toFixed(1);
        
        displayWinnerAnimation(winnerName, winnerUniqueId, winnerPlatform, chancePercent).then(() => {});
    }
    
    function announceWinnerOnTwitch(winnerName, platform, chancePercent) {
        const messageTemplate = announcementMessageInput.value;
        const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
        let message = messageTemplate
            .replace('{winner}', winnerName)
            .replace('{platform}', platformName)
            .replace(/{chance}/g, chancePercent);
        
        sendTwitchMessage(message);
    }
    
    function announceWinnerOnKick(winnerName, platform, chancePercent) {
        if (kickChannel && enableKickBotCheckbox.checked) {
            const messageTemplate = kickAnnounceMessageInput.value;
            if (messageTemplate) {
                const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
                let message = messageTemplate
                    .replace('{winner}', winnerName)
                    .replace('{platform}', platformName)
                    .replace(/{chance}/g, chancePercent);
                sendKickletMessage(message);
            }
        }
    }


    // --- FUNÇÕES DE UI E ESTADO ---
    
    function updateParticipantListUI() {
        participantList.innerHTML = '';
        
        const modalParticipantList = document.getElementById('modal-participant-list');
        if (modalParticipantList) {
            modalParticipantList.innerHTML = ''; 
        }

        participants.forEach((p) => {
            const li = document.createElement('li');
            
            const icon = document.createElement('img');
            icon.className = 'platform-icon';
            icon.src = p.platform === 'kick' ? 'https://kick.com/favicon.ico' : 'https://www.twitch.tv/favicon.ico';
            icon.alt = `${p.platform} icon`;
            li.appendChild(icon);
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = p.username;
            li.appendChild(nameSpan);
            
            if (p.hasWon) {
                li.style.textDecoration = 'line-through';
                li.style.opacity = '0.5';
            }
            
            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'status-tags-container';
            p.tags.forEach(tagInfo => {
                const tagSpan = document.createElement('span');
                tagSpan.className = `status-tag ${tagInfo.class}`;
                tagSpan.textContent = tagInfo.text;
                tagsContainer.appendChild(tagSpan);
            });
            li.appendChild(tagsContainer);
            
            participantList.prepend(li); 

            if (modalParticipantList) {
                const modalLi = li.cloneNode(true); 
                
                if (p.hasWon) {
                    modalLi.style.textDecoration = ''; 
                    modalLi.style.opacity = '';      
                    modalLi.classList.add('winner'); 
                }
                modalParticipantList.prepend(modalLi); 
            }
        });
        
        const totalParticipantCount = participants.size; 
        
        participantCount.textContent = totalParticipantCount;
        
        const modalCountSpan = document.getElementById('modal-participant-count');
        if(modalCountSpan) {
            modalCountSpan.textContent = totalParticipantCount;
        }

        allEntries = [];
        participants.forEach((p, id) => {
            if (!p.hasWon) {
                for (let i = 0; i < p.entries; i++) {
                    allEntries.push(id);
                }
            }
        });
        
        const isDisabled = allEntries.length === 0;
        
        drawButton.disabled = isDisabled;
        
        const modalDrawAgainButton = multiWinnerModalContainer.querySelector('.modal-draw-again-button');
        if (modalDrawAgainButton) {
            modalDrawAgainButton.disabled = isDisabled;
        }
    }


    function updateWinnersListUI() {
        winnersList.innerHTML = '';
        winners.forEach(winner => {
            const li = document.createElement('li');
            const nameSpan = document.createElement('span');
            nameSpan.className = 'winner-name-span';
            nameSpan.textContent = winner.name;
            const dateSpan = document.createElement('span');
            dateSpan.className = 'winner-date-span';
            dateSpan.textContent = winner.date;
            li.appendChild(nameSpan);
            li.appendChild(dateSpan);
            winnersList.prepend(li);
        });
        winnersCount.textContent = winners.length;
    }

    function resetGiveawayState() {
        participants.clear();
        allEntries = [];
        updateParticipantListUI();
    }
    
    function fullReset() {
        resetGiveawayState();
        winners = [];
        winningUsernames.clear(); 
        updateWinnersListUI();
        
        if (kickWs) kickWs.close();
        
        if (twitchClient) {
             twitchClient.removeAllListeners(); 
             twitchClient.disconnect();
             twitchClient = null; 
        }
        
        if (winnerCountdownInterval) clearInterval(winnerCountdownInterval);
        winnerCountdownInterval = null;
        currentMonitoredWinnerId = null;
        currentMonitoredChatbox = null;
        hasWinnerResponded = false;
        
        isGiveawayRunning = false;
        setInputsDisabled(false);
        statusMessage.textContent = translations[currentLang].statusWaiting;
        statusMessage.className = 'status-waiting';
        connectedKickChannel.classList.remove('platform-kick');
        connectedTwitchChannel.classList.remove('platform-twitch');

        pauseGiveawayButton.textContent = translations[currentLang].pauseGiveaway;
        pauseGiveawayButton.classList.remove('paused');
    }
    
    function setInputsDisabled(disabled) {
        const inputs = [
            keywordInput, allowMultiPlatformCheckbox, animationSelect,
            kickSubMultiplier, kickVipMultiplier, twitchSubMultiplier, twitchVipMultiplier,
            
            enableTwitchBotCheckbox,
            twitchBotUsernameInput, twitchBotOauthInput, announcementMessageInput, startMessageInput,
            enableKickBotCheckbox, 
            kickletApiTokenInput, kickStartMessageInput, kickAnnounceMessageInput,

            startGiveawayButton, connectButton, kickChannelInput, twitchChannelInput,
            excludeModsCheckbox, winnerTimerDurationInput,
            languageSelectLogin, languageSelectSettings,
            showWinnerChatCheckbox,
            
            twitchClosedMessageInput, kickClosedMessageInput,
            toggleClosedMessagePanel,
            toggleTwitchBotPanel, toggleKickBotPanel,

            enableAwardsOverlayCheckbox,
            awardsDvInput,
            awardsApiKeyInput,
            toggleAwardsOverlayPanel,
            awardAnnounceMessageInput
        ];
        inputs.forEach(input => input.disabled = disabled);
        
        pauseGiveawayButton.disabled = !disabled; 
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function adjustWinnerFontSize(nameElement, containerElement) {
        nameElement.style.fontSize = '2.5rem';
        const containerWidth = containerElement.clientWidth - 10;
        let nameWidth = nameElement.scrollWidth;
        let currentFontSize = 2.5;

        while (nameWidth > containerElement.clientWidth && currentFontSize > 1.0) {
            currentFontSize -= 0.1;
            nameElement.style.fontSize = `${currentFontSize}rem`;
            nameWidth = nameElement.scrollWidth;
        }
    }

    function displayWinnerAnimation(winnerName, winnerUniqueId, platform, chancePercent) {
        return new Promise(resolve => {
            if (winnerCountdownInterval) {
                clearInterval(winnerCountdownInterval);
            }
            
            const modalInstance = modalTemplate.querySelector('.modal-instance').cloneNode(true);
            
            modalInstance.querySelector('.winner-title-text').textContent = translations[currentLang].drawing;

            const winnerNameEl = document.createElement('h1');
            winnerNameEl.className = 'winner-name';
            const platformIconEl = document.createElement('img');
            platformIconEl.className = 'modal-platform-icon';
            platformIconEl.alt = `${platform} icon`;
            const animationBox = modalInstance.querySelector('.winner-animation-box');
            animationBox.innerHTML = '';
            animationBox.appendChild(platformIconEl);
            animationBox.appendChild(winnerNameEl);

            const timerDisplay = modalInstance.querySelector('#modal-timer-display');
            const buttonContainer = modalInstance.querySelector('.modal-button-container');
            const confirmButton = modalInstance.querySelector('.modal-confirm-button');
            const drawAgainButton = modalInstance.querySelector('.modal-draw-again-button');
            const chatBox = modalInstance.querySelector('#modal-winner-chat');

            // --- Lógica do Painel de Prêmios do Modal ---
            const modalAwardsPanel = modalInstance.querySelector('#modal-awards-panel');
            const modalAwardsList = modalInstance.querySelector('#modal-awards-list-container');
            const modalAwardsCount = modalInstance.querySelector('#modal-awards-count');
            
            if (enableAwardsOverlayCheckbox.checked) {
                modalAwardsPanel.style.display = 'flex';
                modalAwardsList.innerHTML = '';
                
                if (lastValidAwards.length > 0) {
                    lastValidAwards.forEach(award => {
                        const card = document.createElement('div');
                        card.className = 'award-card';
                        card.dataset.awardName = award?.name || '—';

                        const tag = document.createElement('div');
                        tag.className = 'award-card__tag';
                        card.appendChild(tag);

                        const title = document.createElement('div');
                        title.className = 'award-card__title';
                        title.textContent = award?.name || '—';
                        card.appendChild(title);
                        
                        modalAwardsList.appendChild(card);
                    });
                } else {
                    modalAwardsList.innerHTML = `<div class="empty">${translations[currentLang].awardsStatusNoAwards}</div>`;
                }
                modalAwardsCount.textContent = lastValidAwards.length;
            } else {
                modalAwardsPanel.style.display = 'none';
            }
            
            modalInstance.addEventListener('click', (e) => {
                const card = e.target.closest('.award-card');
                if (card) {
                    const awardName = card.dataset.awardName;
                    if (awardName) {
                        sendAwardAnnouncement(awardName);
                    }
                }
            });
            // --- Fim da Lógica do Painel de Prêmios ---


            const modalParticipantList = modalInstance.querySelector('#modal-participant-list');
            
            confirmButton.textContent = translations[currentLang].ok;
            drawAgainButton.textContent = translations[currentLang].drawAgain;

            winners.push({ name: winnerName, date: new Date().toLocaleString() });
            
            const winnerObject = participants.get(winnerUniqueId);
            const winnerUsernameLower = winnerObject.username.toLowerCase();
            
            if (winnerObject) {
              winnerObject.hasWon = true; 
              winningUsernames.add(winnerUsernameLower); 
            }
            
            saveSettings();
            updateWinnersListUI();

            function closeModalAndClearTimer() {
                if (winnerCountdownInterval) clearInterval(winnerCountdownInterval);
                winnerCountdownInterval = null;
                currentMonitoredWinnerId = null;
                currentMonitoredChatbox = null;
                hasWinnerResponded = false;
                
                multiWinnerModalContainer.style.display = 'none';
                multiWinnerModalContainer.innerHTML = '';
                
                updateParticipantListUI();
            }
            
            confirmButton.onclick = () => {
                closeModalAndClearTimer();
                resolve();
            };
            drawAgainButton.onclick = () => {
                closeModalAndClearTimer();
                drawWinner(); 
            };
            
            multiWinnerModalContainer.innerHTML = '';
            multiWinnerModalContainer.appendChild(modalInstance);
            multiWinnerModalContainer.style.display = 'flex'; 
            buttonContainer.style.visibility = 'visible';

            updateParticipantListUI(); 

            currentMonitoredWinnerId = winnerUniqueId;
            currentMonitoredChatbox = chatBox;
            hasWinnerResponded = false;
            
            const showWinnerChat = showWinnerChatCheckbox.checked;
            if (showWinnerChat) {
                chatBox.style.display = 'block';
                chatBox.innerHTML = `<p>${translations[currentLang].chatWaitingForMessage}</p>`;
                chatBox.classList.add('no-messages');
            } else {
                chatBox.style.display = 'none';
            }

            const animationType = animationSelect.value;

            function onAnimationComplete() {
                winnerNameEl.textContent = winnerName;
                winnerNameEl.classList.add('winner');
                platformIconEl.src = platform === 'kick' ? 'https://kick.com/favicon.ico' : 'https://www.twitch.tv/favicon.ico';
                platformIconEl.style.display = 'inline-block';
                
                adjustWinnerFontSize(winnerNameEl, animationBox);

                announceWinnerOnTwitch(winnerName, platform, chancePercent);
                announceWinnerOnKick(winnerName, platform, chancePercent);

                const modalListItems = modalParticipantList.querySelectorAll('li');
                modalListItems.forEach(li => {
                    if (li.classList.contains('winner')) { 
                         li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                });
                
                let duration = parseInt(winnerTimerDurationInput.value, 10) || 0;
                if (duration > 0) {
                    timerDisplay.textContent = formatTime(duration);
                    timerDisplay.style.color = 'var(--primary-text-color)';
                    timerDisplay.style.borderColor = 'var(--border-color)';

                    winnerCountdownInterval = setInterval(() => {
                        duration--;
                        timerDisplay.textContent = formatTime(duration);
                        if (duration <= 0) {
                            clearInterval(winnerCountdownInterval);
                            winnerCountdownInterval = null;
                            timerDisplay.style.color = 'var(--error-color)';
                            timerDisplay.style.borderColor = 'var(--error-color)';
                        }
                    }, 1000);
                } else {
                    timerDisplay.style.display = 'none';
                }
            }

            if (animationType === 'none' || animationType === "") {
                onAnimationComplete();
                return;
            }

            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?*';
            let frame = 0;
            const scrambleInterval = setInterval(() => {
                let output = '';
                let completed = true;
                for (let i = 0; i < winnerName.length; i++) {
                    const from = winnerName[i];
                    const to = chars[Math.floor(Math.random() * chars.length)];
                    const progress = Math.min(frame / (60 + i * 2), 1);
                    if (progress < 1) completed = false;
                    output += (Math.random() < progress) ? from : to;
                }
                winnerNameEl.textContent = output;
                if (completed) {
                    clearInterval(scrambleInterval);
                    onAnimationComplete();
                }
                frame++;
            }, 30);
        });
    }
    
    // --- PERSISTÊNCIA ---
    function saveSettings() {
        const settings = {
            kickChannel: kickChannelInput.value,
            twitchChannel: twitchChannelInput.value,
            kickSubMultiplier: kickSubMultiplier.value,
            kickVipMultiplier: kickVipMultiplier.value,
            twitchSubMultiplier: twitchSubMultiplier.value,
            twitchVipMultiplier: twitchVipMultiplier.value,
            winners: winners,
            excludeMods: excludeModsCheckbox.checked,
            timerDuration: winnerTimerDurationInput.value,
            showWinnerChat: showWinnerChatCheckbox.checked,
            
            enableTwitchBot: enableTwitchBotCheckbox.checked,
            twitchBotUsername: twitchBotUsernameInput.value,
            twitchBotOauth: twitchBotOauthInput.value, 
            startMessage: startMessageInput.value, 
            announcementMessage: announcementMessageInput.value,
            
            enableKickBot: enableKickBotCheckbox.checked,
            kickletApiToken: kickletApiTokenInput.value,
            kickStartMessage: kickStartMessageInput.value,
            kickAnnounceMessage: kickAnnounceMessageInput.value,

            twitchClosedMessage: twitchClosedMessageInput.value,
            kickClosedMessage: kickClosedMessageInput.value,

            enableAwardsOverlay: enableAwardsOverlayCheckbox.checked,
            awardsDv: awardsDvInput.value,
            awardsApiKey: awardsApiKeyInput.value,
            awardAnnounceMessage: awardAnnounceMessageInput.value
        };
        localStorage.setItem('giveawayToolSettings', JSON.stringify(settings));
    }
    
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('giveawayToolSettings'));
        if (settings) {
            kickChannelInput.value = settings.kickChannel || '';
            twitchChannelInput.value = settings.twitchChannel || '';
            kickSubMultiplier.value = settings.kickSubMultiplier || '2';
            kickVipMultiplier.value = settings.kickVipMultiplier || '2';
            twitchSubMultiplier.value = settings.twitchSubMultiplier || '2';
            twitchVipMultiplier.value = settings.twitchVipMultiplier || '2';
            winners = settings.winners || [];
            updateWinnersListUI();
            excludeModsCheckbox.checked = settings.excludeMods || false;
            winnerTimerDurationInput.value = settings.timerDuration || '30';
            showWinnerChatCheckbox.checked = settings.showWinnerChat !== false;
            
            enableTwitchBotCheckbox.checked = settings.enableTwitchBot || false;
            twitchBotUsernameInput.value = settings.twitchBotUsername || '';
            twitchBotOauthInput.value = settings.twitchBotOauth || '';
            startMessageInput.value = settings.startMessage || translations[currentLang].defaultStartMessage; 
            announcementMessageInput.value = settings.announcementMessage || translations[currentLang].defaultAnnounceMessage;

            enableKickBotCheckbox.checked = settings.enableKickBot || false;
            kickletApiTokenInput.value = settings.kickletApiToken || '';
            kickStartMessageInput.value = settings.kickStartMessage || translations[currentLang].defaultKickStartMessage;
            kickAnnounceMessageInput.value = settings.kickAnnounceMessage || translations[currentLang].defaultKickAnnounceMessage;

            twitchClosedMessageInput.value = settings.twitchClosedMessage || translations[currentLang].defaultTwitchClosedMessage;
            kickClosedMessageInput.value = settings.kickClosedMessage || translations[currentLang].defaultKickClosedMessage;

            enableAwardsOverlayCheckbox.checked = settings.enableAwardsOverlay || false;
            awardsDvInput.value = settings.awardsDv || '';
            awardsApiKeyInput.value = settings.awardsApiKey || '';
            awardAnnounceMessageInput.value = settings.awardAnnounceMessage || translations[currentLang].defaultAwardAnnounceMessage;

            if (enableAwardsOverlayCheckbox.checked) {
                startAwardsMonitor();
            }

        } else {
             startMessageInput.value = translations[currentLang].defaultStartMessage;
             announcementMessageInput.value = translations[currentLang].defaultAnnounceMessage;
             kickStartMessageInput.value = translations[currentLang].defaultKickStartMessage;
             kickAnnounceMessageInput.value = translations[currentLang].defaultKickAnnounceMessage;
             winnerTimerDurationInput.value = '30';
             showWinnerChatCheckbox.checked = true;
             twitchClosedMessageInput.value = translations[currentLang].defaultTwitchClosedMessage;
             kickClosedMessageInput.value = translations[currentLang].defaultKickClosedMessage;
             awardAnnounceMessageInput.value = translations[currentLang].defaultAwardAnnounceMessage;
        }
    }

    // --- LÓGICA DO TOOLTIP ---
    function showTooltip(button) {
        const key = button.dataset.tooltipKey;
        const content = translations[currentLang][key];
        
        if (!content) return;
        
        tooltipPopup.innerHTML = content;
        
        const rect = button.getBoundingClientRect();
        
        tooltipPopup.style.visibility = 'hidden';
        tooltipPopup.style.opacity = '0';
        tooltipPopup.style.display = 'block'; 
        const popupRect = tooltipPopup.getBoundingClientRect();
        tooltipPopup.style.display = ''; 
        
        let left = rect.right + window.scrollX + 10; 
        let top = rect.top + window.scrollY + (rect.height / 2) - (popupRect.height / 2);

        if (left + popupRect.width > (window.innerWidth - 10)) {
            left = rect.left + window.scrollX - popupRect.width - 10; 
        }
        if (top < window.scrollY + 10) {
             top = window.scrollY + 10; 
        }
        if (top + popupRect.height > (window.innerHeight + window.scrollY - 10)) {
             top = window.innerHeight + window.scrollY - popupRect.height - 10; 
        }

        tooltipPopup.style.top = `${top}px`;
        tooltipPopup.style.left = `${left}px`;
        tooltipPopup.style.visibility = 'visible';
        tooltipPopup.style.opacity = '1';
    }

    function hideTooltip() {
        tooltipPopup.style.opacity = '0';
        tooltipPopup.style.visibility = 'hidden';
    }
    
    // === FUNÇÕES DO PAINEL DE PRÊMIOS ===

    function renderAwards(awards) {
        if (!Array.isArray(awards) || awards.length === 0) {
            if (lastValidAwards.length === 0) {
                awardsListContainer.innerHTML = `<div class="empty">${translations[currentLang].awardsStatusNoAwards}</div>`;
                awardsStatusMessage.style.display = 'none';
            }
            return;
        }

        const awardsChanged = JSON.stringify(lastValidAwards) !== JSON.stringify(awards);
        if (!awardsChanged) {
            return;
        }

        lastValidAwards = [...awards];
        awardsListContainer.innerHTML = '';
        awardsStatusMessage.style.display = 'none';
        
        awards.forEach(award => {
            const card = document.createElement('div');
            card.className = 'award-card';
            card.dataset.awardName = award?.name || '—';

            const tag = document.createElement('div');
            tag.className = 'award-card__tag';
            card.appendChild(tag);

            const title = document.createElement('div');
            title.className = 'award-card__title';
            title.textContent = award?.name || '—';
            card.appendChild(title);

            awardsListContainer.appendChild(card);
        });
        awardsCount.textContent = awards.length;
    }

    async function fetchAwards() {
        const DV = awardsDvInput.value.trim();
        const API_KEY = awardsApiKeyInput.value.trim();

        if (!DV || !API_KEY) {
            awardsListContainer.innerHTML = `<div class="error">${translations[currentLang].awardsStatusError}</div>`;
            awardsStatusMessage.style.display = 'none';
            return;
        }

        if (isAwardsLoading) return;
        isAwardsLoading = true;
        awardsApiAttempts++;

        const apiUrl = `https://megamu.net/dvapi.php?dv=${encodeURIComponent(DV)}&key=${encodeURIComponent(API_KEY)}&action=getawards&_=${Date.now()}`;
        
        let url = apiUrl;
        if (awardsUsingProxy || awardsApiAttempts > 1) {
            url = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
            awardsUsingProxy = true;
        }

        if (lastValidAwards.length === 0) {
             awardsListContainer.innerHTML = `<div class="empty">${translations[currentLang].awardsStatusLoading}</div>`;
        }
        awardsStatusMessage.style.display = 'none';

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            let data = await response.json();
            
            if (awardsUsingProxy && data.contents) {
                data = JSON.parse(data.contents);
            }

            if (data && (data.result === 1 || data.awards)) {
                renderAwards(data.awards || []);
                awardsCount.textContent = (data.awards || []).length;
            } else {
                if (lastValidAwards.length === 0) {
                     awardsListContainer.innerHTML = `<div class="empty">${translations[currentLang].awardsStatusNoAwards}</div>`;
                }
                 awardsCount.textContent = lastValidAwards.length;
            }

        } catch (error) {
            console.error('Erro ao buscar prêmios:', error);
            
            if (awardsApiAttempts === 1 && !awardsUsingProxy) {
                console.log('Falha na requisição direta, tentando com proxy CORS...');
                awardsUsingProxy = true;
                isAwardsLoading = false;
                fetchAwards();
                return;
            }

            if (lastValidAwards.length === 0) {
                awardsListContainer.innerHTML = `<div class="error">${translations[currentLang].awardsStatusApiError}</div>`;
            }
        } finally {
            isAwardsLoading = false;
        }
    }

    function startAwardsMonitor() {
        console.log('Iniciando monitor de prêmios...');
        awardsOverlayPanel.style.display = 'flex';
        awardsStatusMessage.style.display = 'block';
        awardsStatusMessage.textContent = translations[currentLang].awardsStatusLoading;
        awardsStatusMessage.className = 'status-waiting';
        
        lastValidAwards = [];
        awardsApiAttempts = 0;
        awardsUsingProxy = false;
        
        fetchAwards();
        
        if (awardsApiTimer) clearInterval(awardsApiTimer);
        awardsApiTimer = setInterval(() => {
            awardsApiAttempts = 0;
            fetchAwards();
        }, 15000);
    }

    function stopAwardsMonitor() {
        console.log('Parando monitor de prêmios...');
        awardsOverlayPanel.style.display = 'none';
        awardsStatusMessage.style.display = 'none';
        if (awardsApiTimer) {
            clearInterval(awardsApiTimer);
            awardsApiTimer = null;
        }
        awardsListContainer.innerHTML = '';
        awardsCount.textContent = '0';
        lastValidAwards = [];
    }
    
    function sendAwardAnnouncement(awardName) {
        const messageTemplate = awardAnnounceMessageInput.value;
        if (!messageTemplate) return;

        const message = messageTemplate.replace('{award}', awardName);

        sendTwitchMessage(message);
        sendKickletMessage(message);
    }
    // === FIM DAS FUNÇÕES DO PAINEL DE PRÊMIOS ===


    function handleLanguageChange(event) {
        currentLang = event.target.value;
        setLanguage(currentLang);
        
        // Atualiza os placeholders das mensagens
        const defaultStartEn = translations['en'].defaultStartMessage;
        const defaultStartPt = translations['pt'].defaultStartMessage;
        const defaultStartEs = translations['es'].defaultStartMessage;
        const defaultStartVi = translations['vi'].defaultStartMessage;
        if ([defaultStartEn, defaultStartPt, defaultStartEs, defaultStartVi, ""].includes(startMessageInput.value)) {
            startMessageInput.value = translations[currentLang].defaultStartMessage;
        }

        const defaultAnnounceEn = translations['en'].defaultAnnounceMessage;
        const defaultAnnouncePt = translations['pt'].defaultAnnounceMessage;
        const defaultAnnounceEs = translations['es'].defaultAnnounceMessage;
        const defaultAnnounceVi = translations['vi'].defaultAnnounceMessage;
        if ([defaultAnnounceEn, defaultAnnouncePt, defaultAnnounceEs, defaultAnnounceVi, ""].includes(announcementMessageInput.value)) {
            announcementMessageInput.value = translations[currentLang].defaultAnnounceMessage;
        }
        
        const defaultKickStartEn = translations['en'].defaultKickStartMessage;
        const defaultKickStartPt = translations['pt'].defaultKickStartMessage;
        const defaultKickStartEs = translations['es'].defaultKickStartMessage;
        const defaultKickStartVi = translations['vi'].defaultKickStartMessage;
        if ([defaultKickStartEn, defaultKickStartPt, defaultKickStartEs, defaultKickStartVi, ""].includes(kickStartMessageInput.value)) {
            kickStartMessageInput.value = translations[currentLang].defaultKickStartMessage;
        }

        const defaultKickAnnounceEn = translations['en'].defaultKickAnnounceMessage;
        const defaultKickAnnouncePt = translations['pt'].defaultKickAnnounceMessage;
        const defaultKickAnnounceEs = translations['es'].defaultKickAnnounceMessage;
        const defaultKickAnnounceVi = translations['vi'].defaultKickAnnounceMessage;
        if ([defaultKickAnnounceEn, defaultKickAnnouncePt, defaultKickAnnounceEs, defaultKickAnnounceVi, ""].includes(kickAnnounceMessageInput.value)) {
            kickAnnounceMessageInput.value = translations[currentLang].defaultKickAnnounceMessage;
        }

        const defaultClosedEn = translations['en'].defaultTwitchClosedMessage;
        const defaultClosedPt = translations['pt'].defaultTwitchClosedMessage;
        const defaultClosedEs = translations['es'].defaultTwitchClosedMessage;
        const defaultClosedVi = translations['vi'].defaultTwitchClosedMessage;
        if ([defaultClosedEn, defaultClosedPt, defaultClosedEs, defaultClosedVi, ""].includes(twitchClosedMessageInput.value)) {
            twitchClosedMessageInput.value = translations[currentLang].defaultTwitchClosedMessage;
        }

        const defaultKickClosedEn = translations['en'].defaultKickClosedMessage;
        const defaultKickClosedPt = translations['pt'].defaultKickClosedMessage;
        const defaultKickClosedEs = translations['es'].defaultKickClosedMessage;
        const defaultKickClosedVi = translations['vi'].defaultKickClosedMessage;
        if ([defaultKickClosedEn, defaultKickClosedPt, defaultKickClosedEs, defaultKickClosedVi, ""].includes(kickClosedMessageInput.value)) {
            kickClosedMessageInput.value = translations[currentLang].defaultKickClosedMessage;
        }
        
        const defaultAwardAnnounceEn = translations['en'].defaultAwardAnnounceMessage;
        const defaultAwardAnnouncePt = translations['pt'].defaultAwardAnnounceMessage;
        const defaultAwardAnnounceEs = translations['es'].defaultAwardAnnounceMessage;
        const defaultAwardAnnounceVi = translations['vi'].defaultAwardAnnounceMessage;
        if ([defaultAwardAnnounceEn, defaultAwardAnnouncePt, defaultAwardAnnounceEs, defaultAwardAnnounceVi, ""].includes(awardAnnounceMessageInput.value)) {
            awardAnnounceMessageInput.value = translations[currentLang].defaultAwardAnnounceMessage;
        }
    }

    // --- INICIALIZAÇÃO E EVENTOS ---
    function init() {
        currentLang = getInitialLanguage();
        setLanguage(currentLang);
        
        languageSelectLogin.value = currentLang;
        languageSelectSettings.value = currentLang;

        loadSettings();
        
        connectButton.addEventListener('click', handleConnect);
        startGiveawayButton.addEventListener('click', handleStartGiveaway);
        drawButton.addEventListener('click', drawWinner);
        resetButton.addEventListener('click', fullReset);
        pauseGiveawayButton.addEventListener('click', handlePauseGiveaway);
        
        changeChannelButton.addEventListener('click', () => {
            fullReset();
            showScreen('login');
        });
        
        headerMenuToggle.addEventListener('click', () => {
            headerMenuDropdown.classList.toggle('active');
        });
        
        // --- LÓGICA DOS "OLHINHOS" ---
        toggleTwitchBotPanel.addEventListener('click', (e) => {
            if (e.target.closest('button.toggle-visibility-button')) {
                const isHidden = twitchBotSettingsWrapper.style.display === 'none';
                twitchBotSettingsWrapper.style.display = isHidden ? 'flex' : 'none';
                twitchEyeIconOpen.style.display = isHidden ? 'block' : 'none';
                twitchEyeIconClosed.style.display = isHidden ? 'none' : 'block';
            }
        });

        toggleKickBotPanel.addEventListener('click', (e) => {
            if (e.target.closest('button.toggle-visibility-button')) {
                const isHidden = kickBotSettingsWrapper.style.display === 'none';
                kickBotSettingsWrapper.style.display = isHidden ? 'flex' : 'none';
                kickEyeIconOpen.style.display = isHidden ? 'block' : 'none';
                kickEyeIconClosed.style.display = isHidden ? 'none' : 'block';
            }
        });

        toggleAwardsOverlayPanel.addEventListener('click', (e) => {
            if (e.target.closest('button.toggle-visibility-button')) {
                const isHidden = awardsOverlaySettingsWrapper.style.display === 'none';
                awardsOverlaySettingsWrapper.style.display = isHidden ? 'flex' : 'none';
                awardsEyeIconOpen.style.display = isHidden ? 'block' : 'none';
                awardsEyeIconClosed.style.display = isHidden ? 'none' : 'block';
            }
        });
        
        // === MUDANÇA (OLHINHO MULTIPLICADORES) ===
        toggleMultipliersPanel.addEventListener('click', (e) => {
            if (e.target.closest('button.toggle-visibility-button')) { 
                const isHidden = multipliersSettingsWrapper.style.display === 'none';
                multipliersSettingsWrapper.style.display = isHidden ? 'flex' : 'none';
                multipliersEyeIconOpen.style.display = isHidden ? 'block' : 'none';
                multipliersEyeIconClosed.style.display = isHidden ? 'none' : 'block';
            }
        });
        // === FIM DA MUDANÇA ===
        
        // --- LISTENERS DOS CHECKBOXES ---
        enableAwardsOverlayCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                startAwardsMonitor();
            } else {
                stopAwardsMonitor();
            }
        });
        
        // --- LISTENER DE CLIQUE (PAINEL PRINCIPAL) ---
        awardsListContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.award-card');
            if (card) {
                const awardName = card.dataset.awardName;
                if (awardName) {
                    sendAwardAnnouncement(awardName);
                }
            }
        });

        toggleClosedMessagePanel.addEventListener('click', () => {
            const isHidden = closedMessageSettingsWrapper.style.display === 'none';
            closedMessageSettingsWrapper.style.display = isHidden ? 'flex' : 'none';
            eyeIconOpen.style.display = isHidden ? 'none' : 'block';
            eyeIconClosed.style.display = isHidden ? 'block' : 'none';
        });

        document.addEventListener('click', (e) => {
            if (!headerMenuToggle.contains(e.target) && !headerMenuDropdown.contains(e.target)) {
                headerMenuDropdown.classList.remove('active');
            }
            
            if (!tooltipPopup.contains(e.target) && !e.target.closest('.tooltip-trigger')) {
                hideTooltip();
            }
        });
        
        saveSettingsButton.addEventListener('click', () => {
            saveSettings();
            showAlert('alertSettingsSaved');
            
            if (enableAwardsOverlayCheckbox.checked) {
                stopAwardsMonitor();
                startAwardsMonitor();
            }
        });
        
        languageSelectLogin.addEventListener('change', handleLanguageChange);
        languageSelectSettings.addEventListener('change', handleLanguageChange);
        
        document.querySelectorAll('.tooltip-trigger').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                if (tooltipPopup.style.visibility === 'visible' && tooltipPopup.dataset.currentKey === e.currentTarget.dataset.tooltipKey) {
                    tooltipPopup.dataset.currentKey = '';
                    hideTooltip();
                } else {
                    hideTooltip();
                    showTooltip(e.currentTarget);
                    tooltipPopup.dataset.currentKey = e.currentTarget.dataset.tooltipKey;
                }
            });
        });
    }

    init();
});