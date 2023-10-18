public class SumofSb {
    public static void main(String[] args) {
        int[] arr = {1,-2,6,-1,3 };
        int minsum = arr[0] ; 
        int maxsum = arr[0] ;
        
        int sum ;
        for(int i=0 ; i < arr.length ; i++) {
             for(int j = i ; j < arr.length ; j++){
                sum  = 0 ;
                for(int k = i ; k <= j ; k++){
                    sum+=arr[k];
                }
                maxsum = Math.max(maxsum,sum);
                minsum = Math.min(sum,minsum);
             }
        }
        System.out.println("The maximum sum is "+maxsum);
        System.out.println("The minimum sum is "+minsum);
    }
}
