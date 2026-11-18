CREATE TABLE public.transport_inquiries (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), created_at timestamptz NOT NULL DEFAULT now(), company text NOT NULL, name text NOT NULL, email text NOT NULL, phone text, inquiry_type text NOT NULL, pickup text, destination text, requested_date date, goods text, message text NOT NULL, privacy_consent boolean NOT NULL, submission_id uuid NOT NULL UNIQUE);
GRANT ALL ON public.transport_inquiries TO service_role;
ALTER TABLE public.transport_inquiries ENABLE ROW LEVEL SECURITY;
CREATE TABLE public.inquiry_rate_limits (key text PRIMARY KEY, window_start timestamptz NOT NULL DEFAULT now(), attempts integer NOT NULL DEFAULT 1);
GRANT ALL ON public.inquiry_rate_limits TO service_role;
ALTER TABLE public.inquiry_rate_limits ENABLE ROW LEVEL SECURITY;
CREATE FUNCTION public.allow_transport_inquiry(rate_key text) RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$ DECLARE n integer; BEGIN INSERT INTO public.inquiry_rate_limits AS r(key) VALUES(rate_key) ON CONFLICT(key) DO UPDATE SET attempts = CASE WHEN r.window_start < now() - interval '1 hour' THEN 1 ELSE r.attempts + 1 END, window_start = CASE WHEN r.window_start < now() - interval '1 hour' THEN now() ELSE r.window_start END RETURNING attempts INTO n; RETURN n <= 5; END; $$;
REVOKE ALL ON FUNCTION public.allow_transport_inquiry(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.allow_transport_inquiry(text) TO service_role;