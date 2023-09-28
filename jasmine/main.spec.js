describe('main.js', function(){
    describe('calculate()', function(){
        it("call to add", function(){
            const spy = spyOn(Calculator.prototype, 'add');
            calculate('3+5')
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(5); 
        })

        it("call to subtract", function(){
            const spyA = spyOn(Calculator.prototype, 'subtract');
            const spyB = spyOn(Calculator.prototype, 'add');
            calculate('3-5')
            expect(spyA).toHaveBeenCalledTimes(1);
            expect(spyB).toHaveBeenCalledTimes(1);
            expect(spyB).toHaveBeenCalledWith(3);
            expect(spyA).toHaveBeenCalledWith(5); 
        })

        it("validate expression stub", function(){
            spyOn(window, 'updateResult').and.stub(); // stub = dont return/execute just spy
            // calculate('3+a')
            // expect(window.updateResult).toHaveBeenCalled();
            // expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            // expect(window.updateResult).toHaveBeenCalledTimes(1);

            calculate('3-6')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(-3);
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })

        it("validate expression callThrough", function(){
            spyOn(window, 'updateResult')
            // spyOn(Calculator.prototype, 'multiply'); // Fails
            spyOn(Calculator.prototype, 'multiply').and.callThrough();
            calculate('3*5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(15);

        })

        it("calls updateResult using callFake", function(){
            spyOn(window, 'updateResult')
            spyOn(Calculator.prototype, 'multiply').and.callFake(function(){
                return 50;
            });
            calculate('3*5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(50);
        })

        it("calls updateResult using return values", function(){
            spyOn(window, 'updateResult')
            spyOn(Calculator.prototype, 'multiply').and.returnValues(44, null, 'some value');

            calculate('3*5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(44);
            calculate('3*5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(null);
            calculate('3*5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('some value');
        })
    })
})