package data;

public class Message {
    public String text;
    public FeedResponse feedResponse;
    public Message.Sender sender;
    public enum Sender{
        BOT,USER;
    }
}
