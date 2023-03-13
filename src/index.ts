import * as serve from "https://deno.land/x/serve@1.0.5/deps.ts";

const PORT = 8080

serve.listen(PORT, () => {
    console.log(`Servidor ONLINE escuchando en puerto ${PORT}`)
})



