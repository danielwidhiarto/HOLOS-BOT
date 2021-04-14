module.exports = {
    name: 'bantuan',
    description: "sends the command list",
    async execute(message, args){
        await message.reply (`1. **!ping** - *Melihat Ping kalian*
                              2. **!youtube** - *Melihat Youtube Daniel*
                              3. **!babon** - *Melihat muka babon*
                              4. **!warung** - *Melihat muka preman warung*
                              5. **!panggilanku** - *Gacha nama panggilanku*
                              5. **!mainkan**  - *Memutar musik*
                              6. **!pergi**    - *Mengeluarkan Bot dari Voice Channel atau menghentikan musik*


                              `);
        }
    }