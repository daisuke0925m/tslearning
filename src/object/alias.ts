export default function typeAliasSample() {
    type Country = {
        capital: string
        language: string
        name: string
    }

    const japan: Country = {
        capital: 'Tokyo',
        language: 'japanese',
        name: 'Japan',
    }
    console.log(japan)

    const usa: Country = {
        capital: 'wdc',
        language: 'english',
        name: 'usa',
    }
    console.log(usa)
    // ---------------------------------
    type Knight = {
        hp: number
        sp: number
        weapon: string
        swordSkill: string
    }

    type Wizard = {
        hp: number
        mp: number
        weapon: string
        magicSkill: string
    }

    // 合併型
    type Adventurer = Knight | Wizard
    // 交差型
    type Paladin = Knight & Wizard

    const adventurer1: Adventurer = {
        hp: 100,
        sp: 30,
        weapon: '木の棒',
        swordSkill: '三連斬り',
    }
    const adventurer2: Adventurer = {
        hp: 80,
        mp: 30,
        weapon: '木の杖',
        magicSkill: 'ファイアーボール',
    }

    console.log(adventurer1)
    console.log(adventurer2)
}
