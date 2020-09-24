"use strict"

const _fibNums = []

function _fibNum (num) {
    if (_fibNums[num]) return _fibNums[num]
    if (num === 0 || num === 1) return num
    _fibNums[num] = num + _fibNum(num - 1)
    return _fibNums[num]
}

const _getFibNum = (num) => {
    _fibNums[num] = _fibNum(num)
}

exports.getFibNum = _getFibNum
