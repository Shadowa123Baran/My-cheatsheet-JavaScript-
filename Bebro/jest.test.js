import getSum, {getSquaredArray, getOddNumbers} from './app.js'

// ↑↑↑getSu, это третья функция, которая идет по дефолту и ей присваивается имя только при импорте. и 2 определенные функции↑↑↑

// Equal - равняется

it('test1', () => {
    expect(17).toEqual(17)
})

it('test2', () => {
    expect(18).not.toEqual(17)
})

const getEvenNumbers = (arr) =>
        arr.filter(num => num % 2 === 0)


it ('test3', () => {
    const result = getEvenNumbers([1, 2, 3, 4]);
    expect(result).toEqual([2, 4]);
});

it ('test4', () => {
    const result = getSquaredArray([1, 2, 3])
    expect(result).toEqual([1, 4, 9])
})

it ('test5', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5])
    expect(result).toEqual([1, 3, 5])
})

it ('test6', () => {
    const result = getSum(1, 2)
    expect(result).toEqual(3)
})

