public class Output1 {
public static void main(String[] args) {
    int x = 2 , y = 5;
    
    int exp = (x * y / x);
    int exp2 = x*(y/x);

    System.out.println(exp);
    System.out.println(exp2);

    int a = 2;
    int b = 2;
    int c = 2;

    a+=b;
    b-=c;
    c/=(a+b);
    
    System.out.println(a+" "+b+" "+c+" ");
}
}
