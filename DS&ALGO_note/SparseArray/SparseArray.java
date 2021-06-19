
//original array
//[0,0,0,0,0,0,0,0,0,0,0]
//[0,0,1,0,0,0,0,0,0,0,0]
//[0,0,0,2,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0,0,0]
//[0,0,0,0,0,0,0,0,0,0,0]

public class SparseArray {
  public static void main(String[] args) {
    // create a two dimention array 11*11
    // 0:no chess, 1:dark chess, 2:blue chess
    int chessArr1[][] = new int[11][11];
    chessArr1[1][2] = 1;
    chessArr1[2][3] = 2;
    chessArr1[4][5] = 2;
    // print
    System.out.println("printing original two dimention array");
    for (int[] row : chessArr1) {
      for (int data : row) {
        System.out.printf("%d\t", data);
      }
      System.out.println();
    }
    // transfer two dimention array into sparse array
    // 1.loop through array, find out how many non 0 value
    int totalNonZeroValue = 0;
    for (int i = 0; i < chessArr1.length; i++) {
      for (int j = 0; j < chessArr1[i].length; j++) {
        if (chessArr1[i][j] != 0) {
          totalNonZeroValue++;
        }
      }
    }
    System.out.println("totalNonZeroValue=" + totalNonZeroValue);
    // set up sparse Array
    int sparseArray[][] = new int[totalNonZeroValue + 1][3];
    // assign value to sparseArray
    sparseArray[0][0] = chessArr1.length;
    sparseArray[0][1] = chessArr1[0].length;
    sparseArray[0][2] = totalNonZeroValue;

    // loop through two dimention array, store non zero value to sparse Array
    int count = 0;// count use for record which non-zero data
    for (int i = 0; i < chessArr1.length; i++) {
      for (int j = 0; j < chessArr1[i].length; j++) {
        if (chessArr1[i][j] != 0) {
          count++;
          sparseArray[count][0] = i;
          sparseArray[count][1] = j;
          sparseArray[count][2] = chessArr1[i][j];

        }
      }
    }
    // output sparse array
    System.out.println();
    System.out.println("Sparse array we got: ");
    for (int i = 0; i < sparseArray.length; i++) {
      System.out.printf("%d\t%d\t%d\t\n", sparseArray[i][0], sparseArray[i][1], sparseArray[i][2]);
    }
    System.out.println();

    // recover from sparse array to two dimention array

    // 1.read sparse array, set up two dimention array
    int chessArr2[][] = new int[sparseArray[0][0]][sparseArray[0][1]];

    // 2. red sparse array, assign value to two dimention array
    for (int i = 1; i < sparseArray.length; i++) {
      chessArr2[sparseArray[i][0]][sparseArray[i][1]] = sparseArray[i][2];
    }

    // recovered two dimention array
    System.out.println();
    System.out.println("recovered two dimention array");
    for (int[] row : chessArr2) {
      for (int data : row) {
        System.out.printf("%d\t", data);
      }
      System.out.println();
    }

  }
}