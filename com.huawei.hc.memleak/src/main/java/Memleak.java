/**
 * 内存泄露模拟
 * Created by CalvinHu on 16/10/12.
 */
public class Memleak {
    public void leakMemory() {
        int [][] mem = new int[1000000][];
        for (int i = 0; i < 1000000; i++) {
            mem[i] = new int[2621440];
            System.out.println(i + "0 MB Memory used.");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        Memleak leak = new Memleak();
        leak.leakMemory();
    }
}
