import java.util.*;
import java.lang.*;

public class ArrayList {
  // Maxsize of the List
  private static final int MAXSIZE = 100;
  // array to store data
  private int[] elem;
  // the length of the list
  private int length;

  private static final int TRUE = 1;
  private static final int FALSE = 0;
  private static final int OK = 1;
  private static final int ERROR = 0;
  private static final int INFEASIBLE = -1;
  private static final int OVERFLOW = -2;

  ArrayList() {
    elem = new int[MAXSIZE];
    length = 0;
  }

  public void ClearList() {
    elem = new int[MAXSIZE];
    length = 0;
  }

  public int GetLength() {
    return length;
  }

  public int IsEmpty() {
    if (length == 0)
      return 1;
    else
      return 0;
  }

  public int GetElem(int i) {// O(1)

    if (i < 1 || i > length)
      return ERROR;
    return elem[i - 1];
  }

  public int LocateElem(int e) {// ASL: Average Search Length (n+1)/2 O(n)
    // for (i = 0; i < length; i++) {
    // if (elem[i] == e)
    // return i++;
    // }
    int i = 0;
    while (i < length && elem[i] != e)
      i++;
    if (i < length)
      return i + 1;
    return 0;
  }

  public int ListInsert(int i, int e) {// O(n)
    if (i < 1 || i > length + 1)
      return ERROR;
    if (length == MAXSIZE)
      return ERROR;
    for (int j = length - 1; j >= i - 1; j--) {
      elem[j + 1] = elem[j];
    }
    elem[i - 1] = e;
    length++;
    return OK;

  }

  public int ListDelete(int i) {// O(n)
    if (i < 1 || i > length)
      return ERROR;

    int e = elem[i];
    for (int j = i; j <= length - 1; j++) {
      elem[j - 1] = elem[j];
    }

    length--;
    return e;

  }

  public void printList() {
    for (int i = 0; i < length; i++) {
      System.out.println(elem[i]);
    }
  }

  public static void main(String[] args) {
    ArrayList List = new ArrayList();
    List.printList();
    List.ListInsert(1, 3);
    List.printList();
  }

}
