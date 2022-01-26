module.exports = {
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
      },
    env: {
        "BASE_URL": "https://coffee-kasela.vercel.app/",
        "MONGODB_URL": "mongodb+srv://kasela:kasela@kasela.kyqcg.mongodb.net/kasela?retryWrites=true&w=majority",
        "ACCESS_TOKEN_SECRET": "jbr]PeEX';Q;,&-Kv(5ryEPaDwaFN'd6nE28_t9W_P^mdk.UzR",
        "REFRESH_TOKEN_SECRET": "9Gj}~Pc.e5V6+7f=c<L72RCd`2~6@'$J$-Ea*\B(=,?JrH4n{(T!C&7sbfAVns\:(#)N7X2NECwg-Qbv4&]SN2FJ",
        "CLOUD_UPDATE_PRESET": "coffee_kasela",
        "CLOUD_NAME": "djxpi1fmo",
        "CLOUD_API": "https://api.cloudinary.com/v1_1/djxpi1fmo/image/upload ",
        "ONGKIR_PROVINCE":"	https://api.rajaongkir.com/starter/province",
        "ONGKIR_CITY":"https://api.rajaongkir.com/starter/city",
        "ONGKIR_COST":"https://api.rajaongkir.com/starter/cost",
        "API_KEY":"8d6fc0332644e2a43214a569d567a936"
    }
};