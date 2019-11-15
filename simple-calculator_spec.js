function add(x, y){
    
    var sum = x+y;
    return sum;
}


describe("add", () =>{
    it("finding the sum of 2 number ", () =>{

        expect(add(-1,-1)).toBe(-2);
    })
})

function add_multiple(){
    var sum =0;
    var arr=[];
         for(var i=0; i<arguments.length; i++){
             sum = sum+ arguments[i];
            }
            return sum;
        }

     describe("add_multiple", () =>{
        it("finding the sum of multiple number ", () =>{
    
            expect(add_multiple(1,2,3,4)).toBe(10);
        })
    })

    function multiply(a,b){
        var sum = a*b;
       return sum;
    }
    

    describe("multiply", () =>{
        it("finding the sum of 2 number ", () =>{
    
            expect(multiply(5,2)).toBe(10);
        })
    })

    function multiply_multiple(){
        var sum=1;
        
        for(var i=0; i<arguments.length;i++){
                sum = sum * arguments[i];
            }
            return sum;
        }

        describe("multiply_multiple", () =>{
            it("finding the sum of multiple number ", () =>{
        
                expect(multiply_multiple(2,2,2,2)).toBe(16);
            })
        })
        