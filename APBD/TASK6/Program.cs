using System;
using TASK6.Models;
namespace TASK6
{
    class Program
    {
        static void Main(string[] args)
        {
            IEnumerable<Emp> task1 = LinqTasks.Task1();

            task1.ToList().ForEach(i => Console.WriteLine("Backend dev: " + i.Ename));

            IEnumerable<Emp> task2 = LinqTasks.Task2();

            task2.ToList().ForEach(i => Console.WriteLine("Frontend/Salary >1000: " + i.Ename));

            int task3 = LinqTasks.Task3();

            Console.WriteLine("Maximum salary is " + task3.ToString());

            IEnumerable<Emp> task4 = LinqTasks.Task4();

            task4.ToList().ForEach(i => Console.WriteLine("Emp with salary = Max(sal): " + i.Ename));

            IEnumerable<object> task5 = LinqTasks.Task5();

            task5.ToList().ForEach(i => Console.WriteLine("Attribute changed: " + i.ToString()));

            IEnumerable<object> task6 = LinqTasks.Task6();

            task6.ToList().ForEach(i => Console.WriteLine("All emp with dept data: " + i.ToString()));


            IEnumerable<object> task7 = LinqTasks.Task7();

            task7.ToList().ForEach(i => Console.WriteLine("Group Count: " + i.ToString()));


            bool task8 = LinqTasks.Task8();
            Console.WriteLine("At least one employee works as Backend programmer? " + task8.ToString());


            Emp task9 = LinqTasks.Task9();
            Console.WriteLine("New joiner (frontend programmer)? " + task9.Ename);


            IEnumerable<object> task10 = LinqTasks.Task10();
            task10.ToList().ForEach(i => Console.WriteLine("Union: " + i.ToString()));

            IEnumerable<object> task11 = LinqTasks.Task11();
            task11.ToList().ForEach(i => Console.WriteLine("Department Counter: " + i.ToString()));





        }
    }
}