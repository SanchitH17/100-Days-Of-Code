class BinarySearch{
    public static void main(String[] args) {
        int[] arr = {2,4,6,8,10,11,12,14,16,18,20,22};
        int target = 10;
        System.out.println(search(arr, target));
    }


    public static int search(int[] arr ,int target){
            int start = 0 ;
            int end =  arr.length;
            int mid;

            while(start <= end){
                 mid = (start + end)/2;
              if(arr[mid] == target){
                return mid;
              }
               else if(arr[mid] > target){
                        end = mid-1;
               } 
               else{
                start = mid+1;
               }
            }
            return -1;
    }
}