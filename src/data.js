"use strict";
var activityData = {
    "type": "FROGGY_JUMPS",
    "name": "Zıt Anlamlı Sözcükler 1",
    "description": "Söylenen sözcüğün zıt anlamlısının bulunduğu yaprağa zıplayalım. Kurbağacığın karşı kıyıya geçmesine yardım edelim.",
    "author": "cresas",
    "data": {
        "TIEMPO": 15,
        "TIEMPO_INFINITO": "no",
        "NUMERO_INTENTOS": 3,
        "NUMERO_INTENTOS_INFINITOS": "no",
        "ALEATORIO": "no",
        "NUMERO_PREGUNTAS_VISIBLES": 10,
        "PREGUNTAS": [
        {
            "ENUNCIADO": "Ağır sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Hafif", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Küçük", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Alt sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Üst", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "İyi", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Kötü", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Aşağı sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Yukarı", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Küçük", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "İyi sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Kötü", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Neşeli", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Erken", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Ödül sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Ceza", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Küçük", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Akşam sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Sabah", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "İyi", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Acemi sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Usta", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Cesur", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Korkak", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Hayal sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Gerçek", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Küçük", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Küçük sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Erken", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Gece", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Çalışkan sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Tembel", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Genç", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Yaşlı", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Cesur sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Korkak", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Genç", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Barış", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Genç sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Yaşlı", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Aydınlık", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "İyi", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Barış sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Savaş", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Genç", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Yaşlı", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Aynı sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Farklı", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Küçük", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Aydınlık sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Karanlık", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "İyi", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Kötü", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Gece sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Gündüz", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Neşeli", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Üzgün", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Neşeli sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Üzgün", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Erken", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Gece", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Erken sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Geç", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Neşeli", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "İyi", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Kuru sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Yaş", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Küçük", "RESPUESTA_CORRECTA": "no"}
            ]
        },
        {
            "ENUNCIADO": "Boş sözcüğünün zıt anlamlısını bulun.",
            "RESPUESTAS": [
                {"RESPUESTA": "Dolu", "RESPUESTA_CORRECTA": "si"},
                {"RESPUESTA": "Küçük", "RESPUESTA_CORRECTA": "no"},
                {"RESPUESTA": "Büyük", "RESPUESTA_CORRECTA": "no"}
            
            }
        ],
        "OCULTAR_REDES": "1",
        "TEXTO_FINAL": "Beni karşıya geçirdiğin için teşekkür ederim!"
    },
    "results": {
        "type": ""
    },
    "resources": "resources/",
    "urlPrint": "print.html",
    "lang": {
        "comenzar": "Başlat",
        "opciones": "Seçenekler",
        "sonido": "Ses",
        "sonidoJuego": "Genel etkiler",
        "sonidoActividad": "Belirli sesler",
        "informacion": "Bilgi",
        "imprimirActividad": "Yazdırmak",
        "volver": "Geri",
        "intentos": "",
        "tiempo": "Süre",
        "puntos": "Skor",
        "puntosMin": "Puan",
        "terminar": "Bitiş",
        "cargando": "Yükleniyor",
        "seguroAbandonar": "Etkinliği bırakmak istediğinizden emin misiniz?",
        "no": "Hayır",
        "si": "Evet",
        "ganado": "Kazandın!",
        "enhorabuena": "Tebrikler!",
        "conseguido": "Başarıldı!",
        "perdido": "Oyun Sonu!",
        "total": "Toplam",
        "vidas": "Kalan canlar",
        "reintentar": "Yeniden dene",
        "compartir": "Paylaş",
        "aciertos": "Doğru",
        "resultado": "Sonuçlar",
        "resultadoActividad": "Etkinlik Sonuçları",
        "numero": "#",
        "cuestionario": "Sorular",
        "valorar": "Derecelendir",
        "ayudanos": "Bu etkinliği derecelendirerek Educaplay'i geliştirmemize yardımcı olun",
        "omitir": "Çıkarmak",
        "msgShareResultado": "I got [puntuacion] points in [tiempo] min. in the activity [nomactividad]. Can you beat that?",
        "activityLogin_identificado": "",
        "activityLogin_identificado2": "olarak tanımlandınız",
        "activityLogin_no_identificado": "Kendinizi tanıtmak için burayı tıklayın",
        "traduccion": "This game has been translated to Turkish using an automatic translator. We will be happy to receive your corrections at support@educaplay.com.",
        "sonidoDesactivar": "Bu oyuna özel sesleri devre dışı bırakmak istediğinizden emin misiniz?",
        "infoGPU": "Yavaş GPU algılandı",
        "efectosLimitados": "Bazı görsel-işitsel efektler sınırlıdır",
        "jumpInfo1": "Hedef",
        "jumpInfo2": "Süre dolmadan doğru cevabı bulduğu yere atlayın. Süreniz her dolduğunda veya yanlış bir yere atladığınızda, suya batarsınız ve bir can kaybedersiniz. Oyun ne zaman biter? Ya kıyıya ulaşırsınız ya da tüm hayatınızı kaybedersiniz.",
        "jumpInfo3": "",
        "jumpInfo4": "",
        "jumpInfo5": "Kontroller",
        "jumpInfo6": "Cep Telefonu veya Tablet",
        "jumpInfo7": "Ekranda dokunarak herhangi bir yere atlayın. Yanıtı yakınlaştırmak için yeri basılı tutun veya parmağınızla yukarı sürükleyin. Büyüttükten sonra, bir resim varsa üzerine dokunarak onu görebilirsiniz.",
        "jumpInfo8": "Bilgisayar",
        "jumpInfo9a": "Ana fare tuşuyla üzerine tıklayarak herhangi bir yere atlayın. Bunu klavye oklarıyla da (sol, yukarı veya sağ) yapabilirsiniz.",
        "jumpInfo9b": "veya A, B ve C tuşlarıyla:",
        "jumpInfo9c": "İçeriğini büyütmek için bir yerin üzerine gelin.",
        "jumpInfo10": "Puan",
        "jumpInfo11": "",
        "jumpInfo12": "Her doğru atlama için oyundaki soru sayısıyla orantılı, hepsini doğru cevaplarsanız maksimum 100 puan kazanırsınız.",
        "jumpInfo13": "",
        "jumpInfo14": "",
        "jumpInfo15": "Kendini yarat Froggy Jumps",
        "jumpInfo16a": "Educaplay'de kayıtlı bir kişi bu Froggy Jumps oyununu sadece birkaç tıklamayla yarattı.",
        "jumpInfo16b": "Etkinlik yaratıcısı",
        "jumpInfo16c": "Kendinizi yapabilirsiniz. Ücretsiz bir hesapla istediğiniz kadar Froggy Jumps oluşturabilir ve istediğiniz kadar kişi aynı anda oynayabilir.",
        "jumpInfo16d": "Bu sayfa",
        "jumpInfo16e": "ve Froggy Jumps'ın sizin için eğitici oyunlar dünyasını açtığını göreceksiniz.",
        "jumpInfo17": "Performans geliştirme",
        "jumpInfo18": "Cihazınızda oyunla ilgili performans sorunları yaşıyorsanız, diğer tarayıcı sekmelerini veya programlarını kapatmayı denemenizi öneririz.",
        "jumpInfo19": "Destek",
        "jumpInfo20a": "Oyunun içeriğiyle ilgili herhangi bir soru veya şüpheniz için yaratıcısıyla iletişime geçmenizi öneririz.",
        "jumpInfo20b": "Veya herhangi bir sosyal ağ hesabımızda.",
        "jumpInfo21": "Kredi",
        "jumpInfo22a": "katkısıdır",
        "jumpInfo22b": "eğitici topluma."
    }
};
