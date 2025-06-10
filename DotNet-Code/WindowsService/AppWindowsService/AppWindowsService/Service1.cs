using System.ServiceProcess;
using System.Timers;

namespace AppWindowsService
{
    public partial class Service1 : ServiceBase
    {
        Timer timer = new Timer();
        public Service1()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            "Service OnStart".LogToFile();
            timer.Elapsed += new ElapsedEventHandler(
                (object source, ElapsedEventArgs e) => { "Timer called".LogToFile(); });
            timer.Interval = 5000;
            timer.Enabled = true;
        }

        protected override void OnStop()
        {
            "Service OnStop".LogToFile();
        }
    }
}
