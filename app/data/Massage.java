package data;

public class Massage {
    public String text;
    public FeedResponse feedResponse;
    public Sender sender;
    public enum Sender{
        BOT,USER;
    }
}

