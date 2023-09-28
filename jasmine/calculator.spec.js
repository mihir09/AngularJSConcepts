// test suits
// test
// expectations

describe('calculator.js', function () {

    // Setup functions

    let calculator;
    let calculator2;

    beforeAll(function () {

    });

    beforeEach(function () {
        calculator = new Calculator();
        calculator2 = new Calculator();
    });




    xit('should add numbers to total', function () {
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });

    it('should mul numbers to total', function () {
        calculator.multiply(5);
        expect(calculator.total).toBe(0);
    });

    it('has constructer', function () {
        // calculator.total = "0";     
        expect(calculator).toEqual(calculator2);
    });

    it('initiates unique onjects', function () {
        jasmine.addMatchers(customMatchers);
        // expect(calculator).toBeCalculator();
        expect(2).toBeCalculator();
        // expect(2).not.toBeCalculator();
        // expect(200).not.toBeCalculator();
        // expect(300).toBeCalculator(100, 200);

        calculator.total = "0";
        // expect(calculator).not.toBe(calculator2); 
        // expect(calculator).toBeTruthy(); 
        expect(calculator2).toBeTruthy();
    });

    it('has common operations', function () {
        // expect(calculator.add).toBeDefined();
        // expect(calculator.sub).not.toBeDefined();
        // expect(calculator.subtract).toBeUndefined();
    });

    it('can overwrite total', function () {
        calculator.total = null;
        // expect(calculator.add).toBeDefined();
        // expect(calculator.sub).not.toBeDefined();
        expect(calculator.total).toBeNull();
        expect(calculator.constructor.name).toContain("Calc");
    });

    it('testing for NaN', function () {
        calculator.total = 20;
        calculator.multiply('r');
        expect(calculator.total).toBeNaN();
    });

    it('testing for NaN', function () {
        calculator.total = 20;
        calculator.multiply('r');
        expect(calculator.total).toBeNaN();
    });

    it('handles divide by zero', function () {
        expect(function () { calculator.divide(0) }).toThrow();
        expect(function () { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
    })

    it('Regex', function () {
        calculator.total = -50;
        expect(calculator.add(20)).toBe(-30);
        expect(calculator.total).toMatch(/-?\d+/);
    })

    
    // Tear Down

    afterAll(()=>{

    });
    afterEach(()=>{
        calculator = null;
        calculator2 = null;
    })



})