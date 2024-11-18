import sub from '../app/services/sub.js'

test('1 - 1 = 0', () => {
    expect(sub(1, 1)).toBe(0);
});

test('1 - -1 = 2', () => {
    expect(sub(1, -1)).toBe(2);
});