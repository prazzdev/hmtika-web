import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
    const client = await db.connect()
    
    try {
        const result = await client.sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
        const names = ['Hikari', 'Sovi']
        await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`
        return response.status(200).json({ result });
    } catch (error) {
        return response.status(500).json({ error });
    }

    const pets = await client.sql`SELECT * FROM Pets;`
    return response.status(200).json({ pets })
    // return console.log({pets})
}