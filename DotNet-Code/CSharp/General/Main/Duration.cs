namespace Main
{
    public class DurationHour
    {
        public int Hour { get; set; }

        public DurationHour(int hour)
        {
            Hour = hour;
        }

        public static implicit operator DurationMinute(DurationHour d) => new DurationMinute(d.Hour * 60);
    }

    public class DurationMinute
    {
        public int Minute { get; set; }

        public DurationMinute(int minute)
        {
            Minute = minute;
        }

        public static explicit operator DurationHour(DurationMinute d) => new DurationHour(d.Minute / 60);
    }
}
