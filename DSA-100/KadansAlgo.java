public class KadansAlgo {
    public static void main(String[] args) {

        int[] arr = {-2,-3,4,-1,-2,1,5,-3};
        int maximum = Integer.MIN_VALUE;
        int cursum = 0;
        for(int i = 0 ; i < arr.length  ; i++){
            if(cursum + arr[i] < 0) {
                cursum = 0;
            }
            else{
                cursum+=arr[i];
            }
           
            maximum = Math.max(maximum, cursum);
        }
System.out.println(maximum);
    }
}
