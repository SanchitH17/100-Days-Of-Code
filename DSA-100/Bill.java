import java.util.*;
public class Bill {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
           float pencil = sc.nextFloat();
           float book = sc.nextFloat();
           float rubber = sc.nextFloat();
           float total = rubber+book+pencil;
           System.out.println("TOTAL BILL IS ₹ "+total);
    }
}
