import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { JwtAuthGuard } from "./auth/jwt-auth.guard"

async function start(){

    const port = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder().setTitle('Traineeship').setDescription('Документация API').setVersion('1.0.0').build()
    const document = SwaggerModule.createDocument(app, config)  
    SwaggerModule.setup('/api/docs', app, document)  

    await app.listen(port, () => console.log(`Server started on port = ${port}`))

}

start()